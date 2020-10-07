import styled from 'styled-components'



export const StyledPostDetail = styled.div`
  width: min(70ch, 100%);
  padding: 15px;
  margin: 0 auto;

.newComment {
  margin-top: 30px;
}

  form {

    label {
      margin-bottom: 10px;
    }
    textarea {
      width: 100%;
      margin-bottom: 20px;
      border: 1px solid #777777;
      padding: 15px;
    }

    button {
      background: black;
      color: white;
      padding: 15px;
    }

    & > * {
      display: block;
    }
  }


`