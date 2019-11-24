import React from 'react';

const InfoCard = (props) => {
  return(
    <React.Fragment>
      <div className="app-card info-card">
        <div className="card-tab">
          <a href="#" className="card-tab-item active">Car</a>
          <a href="#" className="card-tab-item">Bus</a>
          <a href="#" className="card-tab-item">Walk</a>
        </div>
        <div className="card-content">
          <div className="card-info">
            <span>Leave by</span>
            <h3>08:34 <span>AM</span></h3>
            <p>Estimated time 11mins</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default InfoCard;
