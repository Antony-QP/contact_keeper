import React, { Fragment, useContext} from 'react'
import ContactItem from './ContactItem'
import ContactContext from '../../context/contact/contactContext';

export const Contacts = () => {

  // This line below gives access to any actions or state within ContactContext

  const contactContext = useContext(ContactContext)
  return (
    <Fragment>
      {contactContext.contacts.map(contact => (
        <ContactItem key={ contact.id }contact={contact}/>
        ))}
    </Fragment>
  )
}
export default Contacts