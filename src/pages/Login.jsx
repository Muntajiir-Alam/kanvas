import React from 'react'
import login from '../assets/login.png'
import loginbg from '../assets/login-bg.png'

import Logo from './Logo'
const Login = () => {
  return (
    <>
      <div className="h-full w-full  flex items-center justify-center  bg-cover bg-center"
      style={{backgroundImage:`url(${loginbg})`}}
      >
          <div className='h-5/7 w-3/5 bg-white/5 backdrop-blur-xs gradient-border  flex items-center justify-between '>
            <div className='h-full w-1/2 flex items-center'>
              <img src={login} alt="login" />
            </div>
            <div className='h-8/10 w-1/2 '>
              <form action="" className='h-full w-full flex flex-col items-center text-white/90'>
                <div><Logo /></div>
                <label htmlFor="Username">Username</label>
                <input type="text" name="" id="Username" placeholder='Enter your user name' className='h-4xl w-full border' />
                
                <label htmlFor="Password">Password</label>
                <input type="password" name="" id="Password" placeholder='Enter your user name' className='h-4xl w-full border' />
                <span>Forgot password ?</span>
                <span>Login with</span>
                <div> 
                 
                </div>
              </form>
            </div>
          </div>
      </div>
    </>
  )
}

export default Login
