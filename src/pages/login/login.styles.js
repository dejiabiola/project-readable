import styled from 'styled-components'
import tw from 'tailwind.macro'
import LoginImage from '../../media/login-picture.png'

export const LoginStyles = styled.main`
  height: 100vh; 
  width: 100vw;
  display: flex;
  padding: 0;
`

export const ImageDiv = styled.div`
  width: 50%;
  height: 100%;
  flex: 1 3 50%;
  background-image: url(${LoginImage});
  background-size: cover;
  background-repeat: no-repeat;
`

export const TextDiv = styled.div`
  width: 50%;
  height: 100%;
  flex: 1 0 50%;
  padding: 100px;

  p {
    ${tw`font-sans text-6xl font-hairline text-6xl text-teal-500`}
  }
`