import React from 'react';

export const Blog = ({
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
        <div className="card col-3 blog" key={index}>
            <img className="card-img-top" src={imgOfUser} alt="Card image cap"/>
            <div className="card-body">
                <h2 className="h6">name: {firstName}</h2>
                <h2 className="h6">email: {email}</h2>
                <h2 className="h6">date of birth: {dob}</h2>
            </div>
        </div>
    )
};