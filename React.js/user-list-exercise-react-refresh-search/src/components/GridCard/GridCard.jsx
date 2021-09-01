import React from "react";
import "../User/User"
import "../../data/random-user"
import { hideEmail, showBirthDate } from "../../functions/functions"

import "./GridCard.css"

const GridCard = (props) => {

    return (
        <div className="card-container">
            <div className="img-container">
                <img src={props.userData.picture.medium} alt="" />
                <h4>{props.userData.name.first}</h4>
            </div>
            <div className="data-container">
                <p>Name: {hideEmail(props.userData.email)}</p>
                <p>Date of birth: {showBirthDate(props.userData.dob.date)}</p>
            </div>
        </div>

    )
}

export { GridCard };