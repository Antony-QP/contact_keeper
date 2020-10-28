import React from 'react'
import ContactForm from '../contacts/ContactForm'
import Contacts from '../contacts/Contacts'
import ContactFilter from '../../components/contacts/ContactFilter'


export const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm/>
        <div>
          <ContactFilter/>
          <Contacts/>
        </div>
      </div>
    </div>
  )
}

export default Home