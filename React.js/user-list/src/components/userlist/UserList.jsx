import React, {useState} from 'react';
import {User} from '../user/User';
import {Blog} from '../blog/Blog';
import {randomUsers} from '../../data/RandomUsers'



export const UserList = () => {    
    const [switchState, setSwitch] = useState(false);
    const onClick = () => setSwitch(!switchState);
    return (
        <div className='container row'>
            <button type='button' onClick={onClick}>SWITCH</button>
            {randomUsers.map((user, index) =>
            switchState?(
                <Blog 
                imgOfUser={user.picture.large}
                firstName={user.name.first}
                email={user.email}
                dateOfBirth={user.dob.date}
                index={index} />):
            (
                <User
                imgOfUser={user.picture.thumbnail}
                firstName={user.name.first}
                email={user.email}
                dateOfBirth={user.dob.date}
                index={index}
                />)
            )}            
        </div>
    )
}