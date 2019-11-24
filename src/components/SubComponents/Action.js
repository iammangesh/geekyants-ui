import React from 'react';

const Actions = (props) => {
  return (
    <React.Fragment>
      <div className="app-top-action">
        <h2>{props.title}</h2>
        {props.hasActionBtn && <a href="#" onClick={props.handleActionClick} className="action-btn"></a>}
        {props.hasMutipleActionsBtn && (
          <React.Fragment>
            <div className="m-actions">
              <a href="#" onClick={props.handleActionClick} className="action-btn search"></a>
              <a href="#" onClick={props.handleActionClick} className="action-btn heart"></a>
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}

export default Actions;
