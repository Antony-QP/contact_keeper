import React from 'react'
import Contacts from '../contacts/Contacts'

export const Home = () => {
  return (
    <div className="grid-2">
      <div>
        {/* {This will be the contact form} */}
        <div>
          <Contacts/>
        </div>
      </div>
    </div>
  )
}

export default Home