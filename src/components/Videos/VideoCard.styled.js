import styled from 'styled-components';

export const Card = styled.div`
  padding: 10px 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 20px #ddd;
  width: ${props => props.large ? '100%' : 'min-content'};
  margin: 10px;
  img {
    width: 300px;
    height: 170px;
    object-fit: cover;
    margin-right: ${props => props.large ? '15px' : '0'};
  }
`

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h3`
  margin-bottom: 0;
`
