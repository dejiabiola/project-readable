import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const HomeStyleContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
`


export const SidePanel = styled.div`
  width: 300px;
  border-right: 1px solid grey;

  li {
    cursor: pointer;
  }
`

export const MainPanel = styled.div`
  width: 100%;
  font-family: roboto;
`

export const NewPostLink = styled(Link)`
  background: black;
  padding: 20px;
  color: white;
  border: 1px solid black;

  &:hover {
    background: transparent;
    color: black;
  }
`

export const CartegoryLink = styled(Link)`
  background: grey;
  border-radius: 20px;
  padding: 12px;
`

