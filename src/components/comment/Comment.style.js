import styled from 'styled-components'


export const StyledComment = styled.div`
  width: 100%;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 20px;
  display: flex;



  & > div:nth-of-type(2) {
    width: 80%;
    margin-left: 30px;
  }
`

export const VoteButton = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 15px 26.0px 15px;
  border-color: transparent transparent #b8c6d6 transparent;
  cursor: pointer;
  transform: ${props => props.downvote ? 'rotate(180deg)' : ''};

  &:active {
    border-color: transparent transparent #000000 transparent;
  }

`