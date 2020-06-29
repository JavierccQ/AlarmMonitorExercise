import React from "react";
import "./AlarmControl.css";

const AlarmControl = () => {
  return (
    <div className="boxstyle">
      <div className="card text-white bg-secondary mb-3 firstCard">
        <div className="card-header">Alarms</div>
        <div className="card-body">
          <h5 className="card-title">Active Alarms</h5>
          <p className="card-text">
            02/20
          </p>
        </div>
      </div>
    </div>
  );
};
export default AlarmControl;
