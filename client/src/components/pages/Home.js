import React, {useContext, useEffect} from 'react'
import ContactForm from '../contacts/ContactForm'
import Contacts from '../contacts/Contacts'
import ContactFilter from '../../components/contacts/ContactFilter'
import AuthContext from '../../context/auth/authContext'



export const Home = () => {
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext.loadUser()
    // eslint-disable-next-line
  }, [])

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