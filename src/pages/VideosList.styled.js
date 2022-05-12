import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`
export const IconButton = styled.button`
  background: transparent;
  text-decoration: none;
  border: none;
  
  &:hover{
    filter: invert(0.6);
  }
`
export const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  input, textarea{
    border: solid 1px #E5E5E5; 
    border-radius: 4px;
    outline: 0;
    height: 1.7em;
    width: 12em;
  }
`
