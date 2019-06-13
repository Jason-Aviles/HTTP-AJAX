import React, { Component } from "react";

class Friendsform extends Component {
  state = {
    friends: [
      {
        id: Math.random(),
        name: "",
        age: 0,
        email: ""
      }
    ]
  };

  handleChange = e => {
    this.setState({
      friends: {
        ...this.state.friends,
        [e.target.name]: e.target.value
      }
    });
  };

  postMessage =e =>{
   e.preventDefault();
   this.props.postMessage(this.state.friends)
  }

  render() {
    return (
      <div>
        <form  onSubmit={this.postMessage}>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.friends.name}
          />
          <input
            onChange={this.handleChange}
            type="number"
            name="age"
            value={this.state.friends.age}
          />
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            value={this.state.friends.email}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Friendsform;
