import React from 'react';

const ShiftCard = (props) => {
  const { name , job_title , state ,contact_no, time } = props.details;

  return(
    <React.Fragment>
      <div className="app-card no-space">
        <div className="container-fluid">
          <div className="row">
            <div className="content col-6 col-sm-6 col-sm-6 col-lg-6">
              <div className="card-item">
                <span className="card-label">Name</span>
                <div className="card-meta-data">
                  <div className="card-meta-thumb">
                    <img src="http://placehold.it/50x50" alt="card image"/>
                  </div>
                  <div className='card-meta-content'>
                    <span>{name}</span>
                    <small> { job_title } </small>
                  </div>
                </div>
              </div>
              <div className="card-item">
                <span className="card-label">Mobile no</span>
                <span className="card-value">{ contact_no }</span>
              </div>
            </div>
            <div className="content col-6 col-sm-6 col-md-6 col-lg-6">
              <div className="card-item">
                <span className="card-label">Time/Place</span>
                <span className="card-value">{ time }</span>
                <span className="card-value light">Fifth Avenue Store</span>
              </div>
              <div className="card-item">
                <span className="card-label">Status</span>
                <span className={`card-value status ${state}`}>{ state }</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ShiftCard;
