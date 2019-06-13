import React, { Component } from "react";
import FriendsList from "./components/FriendsList";
import "./App.css";
import axios from "axios";
import Friendsform from "./components/Friendsform";

class App extends Component {
  state = { friends: [], postSuccess: "", postError: "" };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => this.setState({ friends: response.data }))
      .catch(err => console.log(err));
  }

  postMessage = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(response =>
        this.setState({
          friends: response.data,
          postSuccess: "YOU POSTED!!",
          postError: " "
        })
      )
      .catch(
        err => console.log(err),
        this.setState({ postError: "YOU POSTED!!", postSuccess: "" })
      );
  };

  deleteMessage = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.friends);
    return (
      <div className="App">
        <h1>you have {this.state.friends.length} friends</h1>
        <FriendsList friends={this.state.friends} />
        <h1>
          {this.state.postSuccess
            ? this.state.postSuccess
            : this.state.postError}
        </h1>
        <Friendsform postMessage={this.postMessage} deleteMessage={this.deleteMessage} />
      </div>
    );
  }
}
export default App;
