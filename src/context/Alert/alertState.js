import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer  from "./alertReducer";
import {
  SET_ALERT,
  REMOVE_ALERT
} from "../Types";

const AlertState = (props) => {
  const initialstate = null ;
  const [state, dispatch] = useReducer(AlertReducer, initialstate);

 //set Alert
//set alert to true when there ia an empty inpute---
const setAlert = (msg, type) => {
    dispatch({
        type: SET_ALERT,
        payload: {msg, type}
      });
    setTimeout(() => dispatch({type: REMOVE_ALERT}), 5000);
  };

  ///cloases alert ----
  const closeAlert = () => {
    setAlert(null);
    dispatch({type: REMOVE_ALERT});
  };



  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
        closeAlert,

      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
