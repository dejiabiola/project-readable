import styled from 'styled-components'




export const AddPostWrapper = styled.div`
  width: min(65ch, 100%);
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;

  div {
    margin-bottom: 40px;
  }

  div > * {
    display: block;
  }

  label {
    margin-bottom: 20px;
  }

  input, textarea {
    width: 100%;
    border: 2px solid grey;
    border-radius: 10px;
    padding: 15px;
  }

  button {
    background: black;
    color: white;
    padding: 20px;
  }

`