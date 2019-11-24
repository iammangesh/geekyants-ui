import React from 'react';
import Navigation from './SubComponents/Navigation';
import UserWidget from './SubComponents/UserWidget';
import Branding from './SubComponents/Branding';
import Dashboard from './TabsContent/Dashboard';
import Calendar from './TabsContent/Calendar';


class Layout extends React.Component {
  state = {
    activeNav:0,
    isNavVisible:false,
    navItems:[{
      title:'Dashboard',
      icon:'dashboard',
      component:<Dashboard/>
    },
    {
      title:'Calendar',
      icon:'calendar',
      component:<Calendar/>
    },
    {
      title:'Tickets',
      icon:'tickets',
      component:null
    },
    {
      title:'Contacts',
      icon:'contacts',
      component:null
    },
    {
      title:'Book',
      icon:'book',
      component:null
    },
    {
      title:'Settings',
      icon:'settings',
      component:null
    }]
  }
  switchNavTab = (e,i) => {
    e.preventDefault();
    this.setState({
      activeNav:i,
      isNavVisible:false
    });
  }
  toggleMobileNav = (e) => {
    e.preventDefault();
    this.setState((pstate) => {
      !pstate.isNavVisible ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
      return {
        isNavVisible:!pstate.isNavVisible
      }
    })
  }
  render() {
    const { navItems , activeNav } = this.state;
    return(
      <React.Fragment>
        <section className="app-holder">
          <div className="container-fluid">
          <div className="row">
            <div className="app-column col-xs-12 col-sm-12 col-md-12 col-lg-2">
              <Branding toggleMobileNav={this.toggleMobileNav}/>
              <div style={{'display':this.state.isNavVisible ? 'block' : 'none'}} onClick={this.toggleMobileNav} className="drawar-overlay"></div>
              <div className={this.state.isNavVisible ? "app-drawar open" : "app-drawar"}>
                <UserWidget/>
                <Navigation navItems={navItems} switchNav={this.switchNavTab} activeItem={activeNav}  isNavVisible={this.state.isNavVisible}/>
              </div>
            </div>
            {
              navItems[activeNav].component
            }
          </div>
        </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Layout;
