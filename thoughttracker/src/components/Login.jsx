import React from 'react'

import LoginForm from './LoginForm'

const Login = ({onLogin}) => {
  return (
    <div>
    <div>Login</div>
    <LoginForm onLogin={onLogin}/>
    </div>
   
  )
}

export default Login