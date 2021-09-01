import React from 'react';


const UserItem = (props) => {
    const bgStyle = {
        backgroundColor: props.user.gender === "female" ? '#ffebee' : '#fff'
    }
    
    return (
        <div>
        <div className="collection">
        <ul className="collection-item avatar" style={bgStyle} >
            <li>
                <img className="circle" alt="" src={props.user.photo}/>
                <p>{props.user.upper()}</p>
                <p><i className="material-icons">email</i> email: {props.user.getEmail()}</p>
                <p><i className="material-icons">cake</i>{props.user.getDate()}</p>
            </li>
            </ul>
        </div>
        </div>
    )
}

export default UserItem; 