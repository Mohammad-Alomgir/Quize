import React from 'react'
import Column from '../components/Column'
import Illustration from '../components/Illustration'
import loginImage from '../assets/images/login.svg'
import LoginForm from '../components/LoginForm'
const Login = () => {
  return (
   <>
   <h1>Login to your account</h1>
   <Column>
     <Illustration illustrationImage={loginImage}/>
     <LoginForm />
   </Column>
   </>
  )
}

export default Login
