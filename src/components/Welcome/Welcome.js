import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';
import device from '../../constants/breakpoints';

const StyledWelcome = styled.div`
  background: #f2f2f2;
  height: 303px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContainer = styled.div`
  text-align: center;
  padding: 40px;
`;

const StyledHeader = styled.h1`
  margin: 0;
  font-weight: 400;
`;

const StyledDescription = styled.p`
  padding: 0 30px;
  padding-bottom: 2em;
`;

const StyledButton = styled(Button)`
  font-size: 18px;
  margin-top: 2em;

  @media only screen and ${device.sm} {
    display: none;
  }
`;

const Welcome = () => {
  return (
    <StyledWelcome>
      <StyledContainer>
        <StyledHeader>Velkommen til Folkestemmen!</StyledHeader>
        <StyledDescription>
          Gi tilbakemelding og kom med innspill på spørsmål fra kommunen din{' '}
        </StyledDescription>
        <StyledButton primary icon="PersonFill">
          Logg inn
        </StyledButton>
      </StyledContainer>
    </StyledWelcome>
  );
};

export default Welcome;
