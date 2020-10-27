import React, {useReducer} from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types'

const ContactState = props => {
  const initialState = {
    contacts :[{
      id:1,
      name: 'Jill Johnson',
      email: 'Jill@gmail.com',
      phone: '111-111-111',
      type: 'personal'
    },{
      id:2,
      name: 'Martin Sheen',
      email: 'Martin@gmail.com',
      phone: '111-222-111',
      type: 'personal'
    },{
      id:3,
      name: 'Dobby Dyre',
      email: 'Dobby@gmail.com',
      phone: '111-222-333',
      type: 'professional'
    }]
  }
  // State is sent to the contactReducer via useReducer and it takes initialState as the data
  const [state, dispatch] = useReducer(contactReducer, initialState)

  // This is where the ACTIONS are added

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter
  return (
    <ContactContext.Provider value={{
      contacts : state.contacts
    }}>
      { props.children }
    </ContactContext.Provider>
  )
}

export default ContactState