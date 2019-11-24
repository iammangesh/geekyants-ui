import React from 'react';
import profilePhoto from '../../imgs/profile.png';

const UserWidget = (props) => {
  return(
    <React.Fragment>
      <div className="user-profile">
        <img src={profilePhoto}/>
        <h5>Hello, Susuie </h5>
      </div>
    </React.Fragment>
  )
}


export default UserWidget;
