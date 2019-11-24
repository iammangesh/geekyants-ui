import React from 'react';
import girlDinner from '../../imgs/img-1.jpg';

const BulletinCard = (props) => {
  const { title, img , summary, author } = props.details;
  return(
    <React.Fragment>
      <div className="app-card">
        <figure className="card-img">
          <img src={girlDinner} alt="card image"/>
        </figure>
        <article className="card-content">
          <h2 className="card-title"> { title } </h2>
          <p>{ summary }</p>
            <div className="card-meta-data">
              <div className="card-meta-thumb">
                <img src="http://placehold.it/50x50" alt="card image"/>
              </div>
              <div className='card-meta-content'>
                <span>By { author.name } </span>
                <small>{ author.date } </small>
              </div>
            </div>
        </article>
      </div>
    </React.Fragment>
  );
}

export default BulletinCard;
