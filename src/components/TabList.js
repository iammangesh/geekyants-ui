import React from 'react';


class TabList extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div className="tab-list">
          <div className="tab-list-head">
            <h3 className="tab-title"> Service Request </h3>
            <div className="tab-tabs">
              <a href="#" className="tab-item"> Open (14) </a>
              <a href="#" className="tab-item"> close (12) </a>
              <a href="#" className="tab-item"> Repair History(1) </a>
            </div>
          </div>
          <div className="tab-list-body">

          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default TabList;
