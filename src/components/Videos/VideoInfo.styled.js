import styled from 'styled-components';

export const FlexDiv = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
` 

export const TextWithLineSpaces = styled.div`
  white-space: pre-wrap;
`

export const TextWithIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 18px 5px;
  
  img{
    height: 22px;
    margin-right: 10px;
  }
`

export const LikeButton = styled.button`
  font-size: medium;
  color: white;
  display: flex;
  align-items: center;
  background: #5b9cf7;
  border: none;
  border-radius: 5px;
  padding: 7px 17px;
  
  img{
    height: 23px;
    margin-right: 10px;
    filter: invert(1);
  }
  
  &:hover{
    background: #CC00AA;
  }
`

export const Interactions = styled.div`
  margin-left: 30px;
`
