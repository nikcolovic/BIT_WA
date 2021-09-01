import React from 'react';

const UserCard = (props) => {
    return (
        <div >
        <div className="col s12 m4">
          <div className={"card " + props.user.gender}>
          
            <div className="card-image">
              <img alt='' src={props.user.photo}/>
              <span className="card-title">{props.user.upper()}</span>
            </div>
            <div className="card-content">
              <p>{props.user.getEmail()}</p>
              <p>Birth date:  {props.user.getDate()}</p>
            </div>
            
          </div>
        </div>
      </div>
                
    )
}

export default UserCard; 