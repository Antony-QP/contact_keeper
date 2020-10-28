import React, { Fragment, useContext} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ContactItem from './ContactItem'
import ContactContext from '../../context/contact/contactContext';

export const Contacts = () => {

  // This line below gives access to any actions or state within ContactContext

  const contactContext = useContext(ContactContext)

  const { contacts, filtered } = contactContext

  if(contacts.length === 0){
    return <h4>Please add a contact</h4>
  }

  return (
    <Fragment>
      <TransitionGroup>
      {filtered !== null ? filtered.map(contact => (      <CSSTransition key={contact.id} key={contact.id} timeout={500} classNames="item">

  <ContactItem key={ contact.id }contact={contact}/>

        </CSSTransition >

        )) 

      : contacts.map(contact => (
        <CSSTransition key={contact.id} key={contact.id} timeout={500} classNames="item">
        <ContactItem key={ contact.id }contact={contact}/>
        </CSSTransition>
        ))} 
      </TransitionGroup>
    </Fragment>
  )
}
export default Contacts