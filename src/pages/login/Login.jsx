import React from 'react'
import { LoginStyles, ImageDiv, TextDiv } from './login.styles'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <LoginStyles className="p-0">
      <ImageDiv />
      <TextDiv className="flex flex-col justify-center align-center">
        <p>Welcome Back</p>
        <h1>Login to your Account</h1>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="password" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"/>
          </div>
          <div>
            <input type="checkbox" name="remember" id="remember"/>Remember me
            <Link to="/forgot">
              Forgot Password?
            </Link>
          </div>
          <button type="submit">Login Now</button>
          <button type="button">Or Sign-in with google</button>
        </form>
      </TextDiv>
    </LoginStyles>
  )
}

export default Login
