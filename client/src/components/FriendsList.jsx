import React from 'react';
import Friends from './Friends'
const FriendsList = (props) => {
    return (
        <div>
        {props.friends.map( f => <Friends key={f.id} friend={f}/> )}
           
        </div>
    );
}

export default FriendsList;
