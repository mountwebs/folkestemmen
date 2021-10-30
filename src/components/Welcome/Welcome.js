import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import rectangle3 from '../../assets/welcome-shapes/rectangle3.svg';

const StyledWelcome = styled.div`
  background: #f2f2f2;
  height: 303px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media only screen and ${device.sm} {
    height: 25rem;
  }
`;

const StyledContainer = styled.div`
  padding: 40px;
`;

const StyledHeader = styled.h1`
  text-align: center;
  margin: 0;
  font-weight: 400;
`;

const StyledDescription = styled.p`
  padding: 0 30px;
  padding-bottom: 1em;
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

const StyledShape = styled.img`
  position: absolute;
  z-index: 100;
  position: absolute;
  width: 300px;
  height: 150px;
  left: -150px;
  top: 150px;
  fill: blue;
`;

const Welcome = () => {
  return (
    <StyledWelcome>
      <StyledContainer>
        <StyledShape src={rectangle3} />
        <StyledHeader>Velkommen!</StyledHeader>
        <StyledDescription>
          Vi ønsker mer dialog med våre innbyggere. Her kan du svare på spørsmål
          og komme med innspill.
        </StyledDescription>
        <StyledButton primary icon="PersonFill">
          Logg inn
        </StyledButton>
      </StyledContainer>
    </StyledWelcome>
  );
};

export default Welcome;
