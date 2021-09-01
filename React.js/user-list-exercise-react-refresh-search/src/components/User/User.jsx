import React from "react";

import "./User.css";


const User = (props) => {

    return (
        <div className="single-user">
            <div className="user-img">
                <img src={props.userData.picture.thumbnail} alt="" />
            </div>
            <div className="user-data">
                <p>name:{props.userData.name.first}</p>
                <p>email:{props.userData.email}</p>
                <p>date of birth:{props.userData.dob.date}</p>
            </div>   
        </div>
    )
}

export { User };