import styled from 'styled-components';
import React from 'react'
import {PersonFill} from '@styled-icons/bootstrap'

const PersonFillStyled = styled(PersonFill)`
  width: 22px;
  height: 22px;
  margin-right: 5px;
`

const StyledButton = styled.button`
  font-size: 18px;
  border-radius: 20px; 
  padding: ${(props) => (props.icon ? "10px 20px" : "10px 35px")};
  border: none;
  background: ${(props) => (props.primary ? "#292929" : "#e5e5e5")};
  color: ${(props) => (props.primary ? "white" : "#a5a5a5")};
`;

const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
`

const Button = (props) => {
  return (
    <StyledButton {...props} disabled={props.disabled}>
      <ContainerDiv>
        {props.icon === "PersonFill" && <PersonFillStyled/>}
        {props.children}
      </ContainerDiv>
      </StyledButton>
  )
}

export default Button;
