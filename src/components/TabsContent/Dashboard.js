import React from 'react';
import Action from '../SubComponents/Action';
import BulletinCard from '../SubComponents/BulletinCard';
import ShiftCard from '../SubComponents/ShiftCard';
import InfoCard from '../SubComponents/InfoCard';
import WeatherCard from '../SubComponents/WeatherCard';

const Dashboard = (props) => {
  return(
    <React.Fragment>
    <div className="app-column col-12 col-sm-12 col-md-12 col-lg-10">
      <div className="row row-custom">
        <div className="col-left col-12 col-sm-12 col-md-12 col-lg-4">
          <div className="app-content">
            <Action title="Bulletin board" hasActionBtn={true} handleActionClick={(e) => e.preventDefault()}/>
            <div className="row">
              <div className="col-12 col-sm-6 col-ms-6 col-lg-12">
                  <BulletinCard/>
              </div>
              <div className="col-12 col-sm-6 col-ms-6 col-lg-12">
                  <BulletinCard/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-right col-12 col-sm-12 col-md-12 col-lg-8">
          <div className="app-content">
            <Action title="Shift Monitor" hasActionBtn={false} handleActionClick={(e) => e.preventDefault()}/>
            <div className="container-fluid container-custom">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                  <ShiftCard/>
                  <ShiftCard/>
                  <ShiftCard/>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                  <div className="app-top-action"><h2>Travel Time</h2></div>
                  <InfoCard/>
                  <div className="app-top-action" style={{marginTop:'2rem'}}><h2>Today's Weather</h2></div>
                  <WeatherCard/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Dashboard;
