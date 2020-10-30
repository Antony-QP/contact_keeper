import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
import AlertContext from '../alert/alertContext';
import alertReducer from '../alert/alertReducer';
import {
SET_ALERT,
REMOVE_ALERT
} from '../types'

const AlertState = props => {
  const initialState = []

  // State is sent to the contactReducer via useReducer and it takes initialState as the data
  const [state, dispatch] = useReducer(alertReducer, initialState)

// Set Alert
const setAlert = (msg, type, timeout = 5000) => {
const id = uuidv4();
dispatch({
  type : SET_ALERT,
  payload : { msg, type, id}
});
setTimeout(() => dispatch({ type : REMOVE_ALERT, payload: id}), timeout)
}

// Remove Alert



  return (
    <AlertContext.Provider value={{
      alerts : state,
      setAlert
    }}>
      { props.children }
    </AlertContext.Provider>
  )
}

export default AlertState