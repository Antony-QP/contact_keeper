import React, { useState, useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'

export const Login = () => {

  const alertContext = useContext(AlertContext)

  const { setAlert } = alertContext

  const [user, setUser ] = useState({
    email : '',
    password: '',
  })
  
  const { name, email, password, password2} = user

  const onChange = e => setUser({ ...user, [e.target.name] : e.target.value})

const onSubmit = e => {
  e.preventDefault();
  if(email === '' || password === ''){
    setAlert('Please enter all fields', 'danger')
  }else{
    console.log('Login Submit')
  }
}

  return (
    <div className='form-container'>
      <h1>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" value={email} onChange={onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" value={password} onChange={onChange}/>
        </div>
        <input type="submit" value="Login" className="btn btn-primary btn-block"/>
      </form>
    </div>
  )
}

export default Login