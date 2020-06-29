import React, { useState, useEffect } from "react";
import "./filter.css";

let ALARMS = [
  {
    id: 1,
    name: "Memory Usage Alarm",
    status: true,
  },
  {
    id: 2,
    name: "Another Alarm",
    status: false,
  },
  {
    id: 3,
    name: "Another Alarm",
    status: false,
  },
  {
    id: 4,
    name: "Another Alarm",
    status: false,
  },
  {
    id: 5,
    name: "Another Alarm",
    status: true,
  },
];

const Alarm = ({ status, name, deleteitem }) => {
  return (
    <li className="ulli">
      <span>{name}</span>
      {/* <span className="status">{status ? "Active" : "Inactive"}</span> */}
      <div className="custom-control custom-switch">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitch1"
          defaultChecked={status}
        />
        <label className="custom-control-label" htmlFor="customSwitch1">
          {status ? true : false}
        </label>
      </div>
      <button
        onClick={(e) => deleteitem(name)}
        type="button"
        className="btn btn-light actionbtn"
      >
        Delete
      </button>
      <button onClick="#" type="button" className="btn btn-light actionbtn">
        Edit
      </button>
      <button onClick="#" type="button" className="btn btn-light actionbtn">
        Resume
      </button>
    </li>
  );
};

const AlarmList = () => {
  const [alarms, setalarms] = useState(ALARMS);
  const [name, setname] = useState("");
  const [status, setstatus] = useState(true);

  useEffect(() => {
    const items = ALARMS.filter((el) => el.status === status);
    setalarms(items);
  }, []);

  const handleDelete = (name) => {
    const displayedAlarms = alarms.filter((el) => {
      let searchValue = el.name.toLowerCase();
      return searchValue !== name.toLowerCase();
    });
    console.log(displayedAlarms);
    setalarms(displayedAlarms);
  };

  const searchHandler = () => {
    console.log(status);
    const displayedAlarms = ALARMS.filter((el) => {
      let searchValue = el.name.toLowerCase();
      let searchStatus = el.status;
      return searchValue.indexOf(name) !== -1 && searchStatus === status;
    });
    setalarms(displayedAlarms);
  };
  return (
    <div className="holder">
      <div className="filterdisplay">
        <input
          className="form-control search filterele"
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder="Type alarm name..."
        ></input>

        <div className="custom-control custom-switch filterele">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            defaultChecked={status}
            onChange={(e) => setstatus(e.target.checked)}
          />
          <label className="custom-control-label" htmlFor="customSwitch1">
            Status
          </label>
        </div>
        <button type="button" className="btn btn-light" onClick={searchHandler}>
          Search
        </button>
      </div>
      <div className="alarmlistcontainer">
        <ul className="p-3">
          {alarms.map((el) => {
            return (
              <Alarm
                key={el.id}
                name={el.name}
                status={el.status}
                deleteitem={(e) => handleDelete(e)}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const AlarmConfigView = () => {
  return <AlarmList />;
};
export default AlarmConfigView;
