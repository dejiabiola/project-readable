import styled from 'styled-components'
import { ReactComponent as ThumbUp } from '../../media/thumb-up.svg'
import { ReactComponent as ThumbDown } from '../../media/thumb-down.svg'
import { Link } from 'react-router-dom'



export const PostPreviewDiv = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  max-width: 100%;
  width: 500px;
  padding: 20px;
  margin-bottom: 30px;
  margin-left: ${props => props.fromHome ? 0 : 'auto'};
  margin-right: ${props => props.fromHome ? 0 : 'auto'};
  /* background: ${props => props.fromHome ? 'red' : 'transparent'}; */


  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div {
      display: flex;
      align-items: center;
      width: 100px;
      justify-content: space-between;

      & > div {
      display: flex;
      align-items: center;
    }
    }
  }

  & > div:nth-of-type(1) {
    margin-bottom: 20px;
  }
`


export const VoteUpSvg = styled(ThumbUp)`
  height: 20px;
  width: 20px;
  cursor: pointer;
  margin-right: 6px;
`


export const VoteDownSvg = styled(ThumbDown)`
  height: 20px;
  width: 20px;
  cursor: pointer;
  margin-right: 6px;
`


export const Title = styled(Link)`
  font-size: 24px;
  font-weight: bold;
`

export const Authur = styled.p`
  font-size: 14px;
`

export const PostDate = styled.p`
  font-size: 14px;
  color: grey
`