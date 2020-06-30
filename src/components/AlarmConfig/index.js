import React, { useState, useEffect } from "react";
import "./filter.css";
import data from "./data";



const Alarm = ({ status, name, deleteitem, id, editName, edit, saveName }) => {
  const [newName, setnewName] = useState(name);
  const returnInput = (saveName) => {
    return (
      <div>
        <input
          onChange={(e) => setnewName(e.target.value)}
          type="text"
          defaultValue={name}
        />
        <button
          onClick={(e) => saveName(newName)}
          type="button"
          className="btn btn-light actionbtn"
        >
          Save
        </button>
      </div>
    );
  };

  return (
    <li className="ulli">
      {!edit ? <span>{name}</span> : returnInput(saveName)}
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
      <button
        type="button"
        onClick={() => editName(id)}
        className="btn btn-light actionbtn"
      >
        Edit
      </button>
      <button type="button" className="btn btn-light actionbtn">
        Resume
      </button>
    </li>
  );
};

// Leemos el array de alarmas declarado arriba y seteamos un estado inicial, y una funcion para actualizar ese estado.
const AlarmList = () => {
  const [alarms, setalarms] = useState(data);
  const [name, setname] = useState("");
  const [status, setstatus] = useState(true);
  const [iditem, setid] = useState();
  const [test, settest] = useState(0);

  //Actualizamos los elementos del array basando en el estado inicial.
  useEffect(() => {
    const items = updateState(alarms, status);

    setalarms(items);
  }, []);

  useEffect(() => {
   const interval = setInterval(() =>{ 

      const aux = Math.floor(Math.random() * (10 - 1)) + 1;
      settest(aux);

    }, 3000);
    return () => clearInterval(interval);
  }, [test]);

  const editName = (id) => {
    setid(id);

    console.log(id);
  };

  //Actualiza el listado de alarmas dependiendo de el estado que se le pase como parametro.
  const updateState = (alarmsList, state) => {
    const items = alarmsList.map((el) => {
      if (el.status === state) {
        return {
          ...el,
          show: true,
        };
      } else {
        return {
          id: el.id,
          name: el.name,
          status: el.status,
          show: false,
        };
      }
    });
    return items;
  };

  const saveName = (newName) => {
    const items = alarms.map((item) => {
      if (item.id === iditem) {
        return {
          ...item,
          name: newName,
        };
      } else {
        return item;
      }
    });
    // setid(null);
    setalarms(items);
  };

  const handleDelete = (name) => {
    const displayedAlarms = alarms.filter((el) => {
      let searchValue = el.name.toLowerCase();
      return searchValue !== name.toLowerCase();
    });

    setalarms(displayedAlarms);
  };
  const handleSwitch = (state) => {
    const items = updateState(alarms, state);
    setstatus(state);
    setalarms(items);
  };
  const searchHandler = () => {
    const displayedAlarms = alarms.map((el) => {
      let searchValue = el.name.toLowerCase();
      let searchStatus = el.status;
      if (searchValue.indexOf(name) !== -1 && el.status === status) {
        return {
          ...el,
          show: true,
        };
      } else {
        return {
          id: el.id,
          name: el.name,
          status: el.status,
          show: false,
        };
      }
    });

    setalarms(displayedAlarms);
  };

  const getItem = (item, edit) => {
    if (item.show) {
      console.log(item);
      return (
        <Alarm
          edit={edit === item.id}
          key={item.id}
          {...item}          
          deleteitem={(e) => handleDelete(e)}
          editName={(e) => editName(e)}
          saveName={(e) => saveName(e)}
        />
      );
    }
    return null;
  };
  return (
    <div className="holder">
    <div>
      {test}
      {test > 5 ? "Mayor":"Menor"}
    </div>
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
            onChange={(e) => handleSwitch(e.target.checked)}
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
        <ul className="p-3">{alarms.map((item) => getItem(item, iditem))}</ul>
      </div>
    </div>
  );
};

const AlarmConfigView = () => {
  return <AlarmList />;
};
export default AlarmConfigView;
