import React from 'react';
import Navigation from './Navigation';
import UserWidget from './UserWidget';
import Branding from './Branding';
import BulletinCard from './BulletinCard';

class Layout extends React.Component {
  state = {
    activeNav:0,
    navItems:[{
      title:'Dashboard',
      icon:'',
      component:null
    },
    {
      title:'Calendar',
      icon:'',
      component:null
    },
    {
      title:'Tickets',
      icon:'',
      component:null
    },
    {
      title:'Contacts',
      icon:'',
      component:null
    },
    {
      title:'Book',
      icon:'',
      component:null
    },
    {
      title:'Settings',
      icon:'',
      component:null
    }]
  }
  switchNavTab = (e,i) => {
    e.preventDefault();
    this.setState({
      activeNav:i
    });
  }
  render() {
    return(
      <React.Fragment>
        <section className="app-holder">
          <div className="row">
            <div className="app-column col-xs-12 col-sm-12 col-md-2 col-lg-2">
              <Branding/>
              <UserWidget/>
              <Navigation navItems={this.state.navItems} switchNav={this.switchNavTab} activeItem={this.state.activeNav}/>
            </div>
            <div className="app-column col-xs-12 col-sm-12 col-md-10 col-lg-10">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                  <BulletinCard/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                  right
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Layout;
