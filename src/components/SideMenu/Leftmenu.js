import React, { useState } from "react";
import "./Leftmenu.css";
import AlarmControl from "../ControlPanel/AlarmControl";
import AlarmConfigView from "../AlarmConfig";

const Leftmenu = () => {
  const [view, setView] = useState("dashboard");

  const getViewAlarms = () => {
    return (
      <div className="col-md-12 col-sm-12 back">
        <AlarmConfigView />
      </div>
    );
  };

  const getViewDashboard = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12 back">
            <AlarmControl />
          </div>

          <div className="col-md-6 col-sm-12 back">
            <div className="boxstyle">
              <h1>Just another widget to be implemented in future springs</h1>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="d-flex" id="wrapper">
        {/* <!-- Sidebar --> */}
        <div className="back" id="sidebar-wrapper">
          <div className="sidebar-heading">Menu</div>
          <div className="list-group list-group-flush">
            <a
              href="#"
              onClick={(e) => setView("dashboard")}
              className="list-group-item list-group-item-action back"
            >
              Dashboard
            </a>

            <a
              href="#"
              onClick={(e) => setView("alarms")}
              className="list-group-item list-group-item-action back"
            >
              Alarm Listing
            </a>
          </div>
        </div>
        {/* <!-- /#sidebar-wrapper --> */}

        {/* <!-- Page Content --> */}
        <div className="back" id="page-content-wrapper">
          <nav>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="navbarli"></li>
              </ul>
            </div>
          </nav>
          {view === "alarms" ? getViewAlarms() : getViewDashboard()}
        </div>
      </div>
    </div>
  );
};

export default Leftmenu;
