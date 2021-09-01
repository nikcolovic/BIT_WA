import React from 'react';
import UserItem from './UserItem';

const UserList = (props) => {
    return (
            <div className="row">
            {props.items.map((item, i)=> <UserItem key={i} user={item}/>)}   
        </div>
    )
}


export default UserList; 