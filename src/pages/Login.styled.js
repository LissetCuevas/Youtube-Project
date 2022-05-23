import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  
  label{
    margin-bottom: 10px;
  }
  
  input, textarea{
    border: solid 1px #E5E5E5; 
    border-radius: 4px;
    outline: 0;
    height: 1.7em;
    width: 18em;
    align-self: center;
    margin-bottom: 20px;
  }
  
  button{
    width: 10em;
    height: 2em;
    align-self: center;
  }
`
