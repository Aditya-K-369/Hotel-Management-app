import React from 'react'
import '../index.css'
const Login = () => {
  return (
    <div className="Login-Page">
        <input className='Login-Page-input' type="email" name="email" id="email" placeholder='Enter your email'  required/>
        <input className='Login-Page-input'  type="password" name="password" id="password" placeholder='Enter your password'  required/>
        <button className='Login-Page-input Login-Page-Submit'  type="submit">login</button>
    </div>
  )
}

export default Login