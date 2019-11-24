import React from 'react';

const Branding = (props) => {
  return(
    <React.Fragment>
      <div className="app-branding">
        <img src="http://placehold.it/50x50" alt="Branding"/>
        <a onClick={props.toggleMobileNav} href="#"></a>
      </div>
    </React.Fragment>
  )
}

export default Branding;
