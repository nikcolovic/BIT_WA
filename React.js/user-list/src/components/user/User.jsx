import React from 'react';

export const User = ({
    imgOfUser,
    firstName,
    email,
    dateOfBirth,
    index,
}) => {
    let day = new Date(dateOfBirth).getDate();
    let month = new Date(dateOfBirth).getMonth() + 1;
    let year = new Date(dateOfBirth).getFullYear();
    let dob = `${day}-${month}-${year}`;
    return (
        <div className="user" key={index}>
            <img src={imgOfUser} alt="Card image cap"/>
            <div className="info">
                <h2>name: {firstName}</h2>
                <h2>email: {email}</h2>
                <h2>date of birth: {dob}</h2>
            </div>
        </div>
    )
};