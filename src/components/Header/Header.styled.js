import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainHeader = styled.header`
  background-color: #a9017e;
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
`

export const NavList = styled.div`
  color: #FFF;
  display: flex;
  align-items: center;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFF;
  margin: 0px 10px;
  &:hover{
    font-weight: 700;
    font-size: medium;
    text-decoration: underline;
  }
`
export const IconButton = styled.button`
  background: transparent;
  text-decoration: none;
  border: none;
  filter: invert(1);
  
  &:hover{
    filter: invert(0.6);
  }
`
export const SearchWrapper = styled.form`
  display: flex;
  align-items: center;
  input, textarea{
    border: solid 1px #E5E5E5; 
    border-radius: 4px;
    outline: 0;
    height: 1.7em;
    width: 12em;
  }
`
