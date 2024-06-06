import { useState } from 'react'
import React  from 'react'
import './Login.css'

const Login = () => {

    const [user,setUser] =useState({
        email:"",
        password:"",
    })

    const  handleChange = e => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
  return (
    <div className='login'>
          {console.log("User",user)};
        <h1>Login page</h1>
        <input type='text' name='email' value={user.name} onChange={handleChange} placeholder='Enter the Email'></input>
        <input type='password' name='password' value={user.password} onChange={handleChange}  placeholder='Enter the password'></input>
        <div className='button'>Login</div>
        <div>or</div>
        <div className='button' >Resiter</div>      
    </div>
  )
}

export default Login
