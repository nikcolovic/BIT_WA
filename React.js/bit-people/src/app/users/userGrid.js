import React from 'react';

import UserCard from './userCard.js';


const UserGrid = (props) => {
    return (
            <div className="row">
            {props.items.map((item, i)=> <UserCard key={i} user={item}/>)}   
        </div> 
    )
}

export default UserGrid; 