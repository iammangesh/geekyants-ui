import React from 'react';
import logo from '../../imgs/logo.png';

const Branding = (props) => {
  return(
    <React.Fragment>
      <div className="app-branding">
        <img src={logo} alt="Branding"/>
        <a onClick={props.toggleMobileNav} href="#"></a>
      </div>
    </React.Fragment>
  )
}

export default Branding;
