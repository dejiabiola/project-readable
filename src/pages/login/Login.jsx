import React from 'react'
import { LoginStyles, ImageDiv, TextDiv, LoginForm, ForgotLink, Button, LoginGoogleIcon } from './login.styles'


const Login = () => {
  return (
    <LoginStyles className="p-0">
      <ImageDiv className="" />
      <TextDiv className="flex flex-col justify-center items-center font-login">
      <div className="font-login">
      <p>Welcome Back</p>
        <h1>Login to your Account</h1>
        <LoginForm>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="password"  />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"/>
          </div>
          <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
          <input type="checkbox" name="remember" id="remember"/><span className="ml-3">Remember me</span> 
          </div>
            <ForgotLink to="/forgot">
              Forgot Password?
            </ForgotLink>
          </div>
          <Button type="submit">Login Now</Button>
          <Button type="button" googleLogin>
          <LoginGoogleIcon />
          Or Sign-in with google</Button>
        </LoginForm>
      </div>
        
      </TextDiv>
    </LoginStyles>
  )
}

export default Login
