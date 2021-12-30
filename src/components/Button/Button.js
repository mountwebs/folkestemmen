import styled from 'styled-components';
import React from 'react';
import { PersonFill } from '@styled-icons/bootstrap';

const PersonFillStyled = styled(PersonFill)`
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 10px;
`;

const StyledButton = styled.button`
  white-space: nowrap;
  border-radius: 20px;
  padding: ${(props) => (props.icon ? '0.5rem 20px' : '0.5rem 1.6rem')};
  border: none;
  background: ${(props) => (props.primary ? '#292929' : '#e5e5e5')};
  color: ${(props) => (props.primary ? 'white' : '#a5a5a5')};

  :hover:disabled {
    cursor: inherit;
  }
`;

const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props} disabled={props.disabled}>
      <ContainerDiv>
        {props.icon === 'PersonFill' && <PersonFillStyled />}
        {children}
      </ContainerDiv>
    </StyledButton>
  );
};

export default Button;
