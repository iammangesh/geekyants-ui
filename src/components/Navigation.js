import React from 'react';

class Navigation extends React.Component {
  render() {
    return(
      <React.Fragment>
        <nav className="app-nav">
          <ul className="app-nav-list">
            <li className="nav-list-item">
              <a href="#">
                <span className="nav-icon"> </span>
                <span className="nav-text">Dashboard </span>
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#">
                <span className="nav-icon"> </span>
                <span className="nav-text">Calendar </span>
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#">
                <span className="nav-icon"> </span>
                <span className="nav-text">Tickets </span>
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#">
                <span className="nav-icon"> </span>
                <span className="nav-text">Contacts </span>
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#">
                <span className="nav-icon"> </span>
                <span className="nav-text">Book</span>
              </a>
            </li>
            <li className="nav-list-item">
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
