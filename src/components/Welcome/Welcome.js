import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import welcomeImg from '../../assets/welcome.svg';

const StyledWelcome = styled.div`
  background: #f2f2f2;
  height: 303px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media only screen and ${device.sm} {
    align-items: stretch;
    height: 536px;
  }
`;

const StyledContainer = styled.div`
  text-align: center;
  padding: 40px;

  @media only screen and ${device.sm} {
    padding-top: 70px;
  }
`;

const StyledHeader = styled.h1`
  margin: 0;
  font-weight: 400;
`;

const StyledDescription = styled.p`
  padding: 0 30px;
  padding-bottom: 2em;
  padding-top: 1em;
  max-width: 550px;
  text-align: center;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  font-size: 18px;
  margin-top: 2em;

  @media only screen and ${device.sm} {
    display: none;
  }
`;

const StyledWelcomeImg = styled.img`
  display: none;

  @media only screen and ${device.sm} {
    display: block;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    height: 310px;
    max-width: 100%;
    object-fit: cover;
    align-self: flex-end;
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
        <StyledWelcomeImg src={welcomeImg} />
      </StyledContainer>
    </StyledWelcome>
  );
};

export default Welcome;
