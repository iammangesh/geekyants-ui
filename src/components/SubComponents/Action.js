import React from 'react';

const Actions = (props) => {
  return (
    <React.Fragment>
      <div className="app-top-action">
        <h2>{props.title}</h2>
        {props.hasActionBtn && <a href="#" onClick={props.handleActionClick} className="action-btn"></a>}
      </div>
    </React.Fragment>
  );
}

export default Actions;
