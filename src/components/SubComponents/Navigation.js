import React from 'react';

const Navigation = (props) => {
  const { navItems , switchNav , activeItem } = props;
  return(
    <React.Fragment>
      <nav className="app-nav">
        <ul className="app-nav-list">
          {
            navItems != undefined && navItems.map((item,index) => {
              return(
                <React.Fragment key={index}>
                <li className={activeItem == index ? "nav-list-item active" : "nav-list-item"} data-icon={item.icon} onClick={(e) => {
                    switchNav(e,index)
                  }}>
                  <a href="#">
                    <span className="nav-icon">  </span>
                    <span className="nav-text"> { item.title }</span>
                  </a>
                </li>
                </React.Fragment>
              )
            })
          }
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navigation;
