import React from 'react';

const WeatherCard = (props) => {
  return(
    <React.Fragment>
      <div className="app-card info-card">
        <div className="card-tab">
          <a href="#" className="card-tab-item active">New York</a>
        </div>
        <div className="card-content">
          <div className="card-info">
            <h3>27 &#8451;</h3>
            <p>clear</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WeatherCard;
