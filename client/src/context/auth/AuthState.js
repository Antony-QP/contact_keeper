import React, {useReducer} from 'react';
import AuthContext from '../auth/authContext';
import authReducer from '../auth/authReducer'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../types'

const AuthState = props => {
  const initialState = {
    token : localStorage.getItem('token'),
    isAuthenticated: null,
    lodaing: true,
    user: null,
    error: null
  }
  // State is sent to the contactReducer via useReducer and it takes initialState as the data
  const [state, dispatch] = useReducer(authReducer, initialState)

  // This is where the ACTIONS are added

  // Load User

  // Register User

  // Login User

  // Logout

  // Clear Errors



  return (
    <AuthContext.Provider value={{
      token : state.token,
      isAuthenticated : state.isAuthenticated,
      loading : state.loading,
      user : state.user,
      token : state.token,
      error : state.error,
    }}>
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthState