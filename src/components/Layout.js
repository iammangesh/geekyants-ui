import React from 'react';
import Navigation from './Navigation';
import UserWidget from './UserWidget';
import Branding from './Branding';

const Layout = (props) => {
  return(
    <React.Fragment>
      <section className="app-holder">
        <div className="row">
          <div className="app-column col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
            <Branding/>
            <UserWidget/>
            <Navigation/>
          </div>
          <div className="app-column col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Layout;
