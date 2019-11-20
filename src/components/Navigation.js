import React from 'react';

class Navigation extends React.Component {
  state = {
    active:0
  }
  switchNav = (i) => {

    let navItems = document.querySelectorAll('.nav-list-item');
    navItems.forEach((item,index) => {
      if(index == i) {

        item.classList.add('active');
        this.setState({
          active:i
        });
      }
      else {
        item.classList.remove('active');
      }
      index == i - 1 ? item.classList.add('active-next') : item.classList.remove('active-next');
      index == i + 1 ? item.classList.add('active-prev') : item.classList.remove('active-prev');

    });


  }
  render() {
    return(
      <React.Fragment>
        <nav className="app-nav">
          <ul className="app-nav-list">
            <li className="nav-list-item active" onClick={() => this.switchNav(0)}>
              <a href="#">
                <span className="nav-icon"> </span>
                <span className="nav-text">Dashboard </span>
              </a>
            </li>
            <li className="nav-list-item" onClick={() => this.switchNav(1)}>
              <a href="#">
                <span className="nav-icon"> </span>
                <span className="nav-text">Calendar </span>
              </a>
            </li>
            <li className="nav-list-item" onClick={() => this.switchNav(2)}>
              <a href="#">
                <span className="nav-icon"> </span>
                <span className="nav-text">Tickets </span>
              </a>
            </li>
            <li className="nav-list-item" onClick={() => this.switchNav(3)}>
              <a href="#">
                <span className="nav-icon"> </span>
                <span className="nav-text">Contacts </span>
              </a>
            </li>
            <li className="nav-list-item" onClick={() => this.switchNav(4)}>
              <a href="#">
                <span className="nav-icon"> </span>
                <span className="nav-text">Book</span>
              </a>
            </li>
            <li className="nav-list-item" onClick={() => this.switchNav(5)}>
              <a href="#">
                <span className="nav-icon"> </span>
                <span className="nav-text">Settings </span>
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    )
  }
}

export default Navigation;
