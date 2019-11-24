import React from 'react';
import Action from '../SubComponents/Action';
import BulletinCard from '../SubComponents/BulletinCard';

const Calendar = (props) => {
  return(
    <React.Fragment>
    <div className="app-column col-xs-12 col-sm-12 col-md-12 col-lg-10">
      <div className="row row-custom">
        <div className="col-left col-xs-12 col-sm-12 col-md-12 col-lg-4">
          <div className="app-content">
            <Action title="Calander board" hasActionBtn={true} handleActionClick={(e) => e.preventDefault()}/>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-ms-6 col-lg-12">
                  <BulletinCard/>
              </div>
              <div className="col-xs-12 col-sm-6 col-ms-6 col-lg-12">
                  <BulletinCard/>
              </div>
              <div className="col-xs-12 col-sm-6 col-ms-6 col-lg-12">
                  <BulletinCard/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-right col-xs-12 col-sm-12 col-md-12 col-lg-8">
          <div className="app-content">
            <div className="container-fluid container-custom">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
                  <Action title="Shif Monitor" hasActionBtn={false} handleActionClick={(e) => e.preventDefault()}/>
                  <BulletinCard/>
                  <BulletinCard/>
                  <BulletinCard/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                  <BulletinCard/>
                  <BulletinCard/>
                  <BulletinCard/>
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

export default Calendar;
