import React from 'react';
import girlDinner from '../../imgs/img-1.jpg';
const BulletinCard = (props) => {
  return(
    <React.Fragment>
      <div className="app-card">
        <figure className="card-img">
          <img src={girlDinner} alt="card image"/>
        </figure>
        <article className="card-content">
          <h2 className="card-title">Blue Stone lane now overtakes starbet </h2>
          <p>To celebrate company happy hours at houson yards and near by places </p>
            <div className="card-meta-data">
              <div className="card-meta-thumb">
                <img src="http://placehold.it/50x50" alt="card image"/>
              </div>
              <div className='card-meta-content'>
                <span>By Catherin Wassen </span>
                <small>2 days ago </small>
              </div>
            </div>
        </article>
      </div>
    </React.Fragment>
  );
}

export default BulletinCard;
