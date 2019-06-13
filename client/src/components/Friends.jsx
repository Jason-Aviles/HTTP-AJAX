import React from 'react';

const Friends = (props) => {
    const {name,age,email} = props.friend
    return (
        <div>
            <h1>{name}</h1>
            <h2>age:{age}</h2>
            <h3> email:{email}  </h3>
        </div>
    );
}

export default Friends;
