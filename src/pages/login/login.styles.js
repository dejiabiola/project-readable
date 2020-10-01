import styled, { css } from 'styled-components'
// import tw from 'tailwind.macro'
import LoginImage from '../../media/login-picture.png'
import {Link} from 'react-router-dom'
import {ReactComponent as GoogleIcon} from '../../media/google.svg'

const fontStuff = css`
  font-weight: 400;
  font-style: normal;
`

// const fontFamily = 'roboto, sans-serif'

export const LoginStyles = styled.main`
  height: 100vh; 
  width: 100vw;
  display: flex;
  padding: 0;
`

export const ImageDiv = styled.div`
  width: 50%;
  height: 100%;
  flex: 1 5 50%;
  background-image: url(${LoginImage});
  background-size: cover;
  background-repeat: no-repeat;


  @media (max-width: 790px) {
    display: none;
  }
`

export const TextDiv = styled.div`
  width: 50%;
  height: 100%;
  flex: 2 0 50%;
 

  & > div {
    max-width: 350px;
    padding: 15px;
  }

  p {
    ${fontStuff};
    font-size: 1rem;
    line-height: 1.02rem;
    color: rgba(45, 55, 72, 1);
    margin-bottom: 5px;
  }

  h1 {
    ${fontStuff}
    font-weight: 700;
    font-size: 30px;
    line-height: 35.16px;
    color: rgba(26, 32, 44, 1);
    margin-bottom: 1.5rem;
  }
`

export const LoginForm = styled.form`
  label {
    ${fontStuff};
    font-size: 1rem;
    line-height: 18.75px;
    color: rgba(74, 85, 104, 1);
    display: block;
    margin-bottom: 11px;
  }

  input[type=email], input[type=password] {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #E8E8E8;
    background: white;
    padding: 1rem;
    margin-bottom: 11px;
  }

  input[type=password] {
    margin-bottom: 28px;
  }

  input[type=checkbox] {
    cursor: pointer;

    & ~ span {
      ${fontStuff};
      font-size: 14px;
      line-height: 16px;
    }
  }
`


export const ForgotLink = styled(Link)`
  ${fontStuff};
  color: #2C5282;
  font-size: 14px;
  line-height: 16px;

`

const googleLoginStyles = css`
  background: #2D3748;
  display: flex;
  justify-content: center;
  align-items: center;
`

const normalLoginStyles = css`
  background: #04C45C;
  margin-bottom: 15px;
`

const getButtonStyles = (props) => {
  if (props.googleLogin) {
    return googleLoginStyles
  }
  return normalLoginStyles
}


export const Button = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  color: white;
  border-radius: 5px;
  ${fontStuff};
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  ${getButtonStyles};
`

export const LoginGoogleIcon = styled(GoogleIcon)`
  height: 20px;
  width: 20px;
  margin-right: 11px;
`

