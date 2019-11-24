import React from 'react';
import Action from '../SubComponents/Action';
import BulletinCard from '../SubComponents/BulletinCard';
import ShiftCard from '../SubComponents/ShiftCard';
import InfoCard from '../SubComponents/InfoCard';
import WeatherCard from '../SubComponents/WeatherCard';

const Tickets = (props) => {
  return(
    <React.Fragment>
    <div className="app-column col-12 col-sm-12 col-md-12 col-lg-10">
      <div className="row row-custom">
        <div className="col-left col-12 col-sm-12 col-md-12 col-lg-4">
          <div className="app-content">
            <Action title="Tickets Tab" hasActionBtn={false} handleActionClick={(e) => e.preventDefault()}/>
            <div className="row">
              {
                props.bulletins != undefined &&  props.bulletins.map((item,index) => {
                  return (
                    <React.Fragment key={index}>
                      <div className="card-wrap col-12 col-sm-6 col-ms-6 col-lg-12">
                          <BulletinCard details={item}/>
                      </div>
                    </React.Fragment>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="col-right col-12 col-sm-12 col-md-12 col-lg-8">
          <div className="app-content">
            <Action title="Shift monitor" hasMutipleActionsBtn={true} hasActionBtn={false} handleActionClick={(e) => e.preventDefault()}/>
            <div className="container-fluid container-custom">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                  <div className="filter-tab">
                    <a href="#" className="tab-item active"> Pending</a>
                    <a href="#" className="tab-item">Confirmed</a>
                  </div>
                  <div className="card-list">
                    {
                      props.shifts != undefined && props.shifts.map((item,index) => {
                        return (<ShiftCard key={index} details={item}/>)
                      })
                    }
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                  <div className="app-top-action m-top"><h2>Travel Time</h2></div>
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

export default Tickets;
