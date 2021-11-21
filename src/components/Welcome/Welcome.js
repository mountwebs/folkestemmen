import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import rectangle3 from '../../assets/welcome-shapes/rectangle3.svg';
import rectangle7 from '../../assets/welcome-shapes/rectangle7.svg';
import union2 from '../../assets/welcome-shapes/union2.svg';
import star from '../../assets/welcome-shapes/star.svg';
import union from '../../assets/welcome-shapes/union.svg';

const StyledWelcome = styled.div`
  background: ${({ theme }) => theme.colors.body.background};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 10;

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
  background: ${({ theme }) => theme.colors.buttons.header.background};
  color: ${({ theme }) => theme.colors.buttons.header.text};
  font-size: 18px;
  margin-top: 1em;
  bottom: 1em;

  @media only screen and ${device.sm} {
    display: none;
  }
`;

const StyledShape = styled.img`
  position: absolute;
  z-index: -100;
`;

const StyledRectangle3 = styled(StyledShape)`
  width: 300px;
  height: 150px;
  left: -188px;
  top: 170px;

  @media only screen and ${device.sm} {
    width: 300px;
    height: 150px;
    left: -150px;
    top: 220px;
  }
`;

const StyledUnion2 = styled(StyledShape)`
  width: 180px;
  left: -120px;
  top: -40px;

  @media only screen and ${device.sm} {
    width: 200px;
    left: 30px;
    top: 25px;
  }
`;

const StyledStar = styled(StyledShape)`
  width: 100px;
  right: -30px;
  top: 190px;

  @media only screen and ${device.sm} {
    width: 125px;
    left: 200px;
    top: 300px;
  }
`;

const StyledUnion = styled(StyledShape)`
  width: 225px;
  top: 225px;
  right: 0;
  display: none;

  @media only screen and ${device.sm} {
    display: block;
  }
`;

const StyledRectangle7 = styled(StyledShape)`
  width: 85px;
  right: -20px;
  top: -25px;

  @media only screen and ${device.sm} {
    width: 125px;
    right: 75px;
    top: 0;
  }
`;

const Welcome = ({ showModal, setShowModal }) => {
  const handleLogin = () => {
    setShowModal(!showModal);
  };

  return (
    <StyledWelcome>
      <StyledContainer>
        <StyledHeader>Velkommen!</StyledHeader>
        <StyledDescription>
          Vi ønsker mer dialog med våre innbyggere. Her kan du svare på spørsmål
          og komme med innspill.
        </StyledDescription>
        <StyledRectangle3 src={rectangle3} />
        <StyledUnion2 src={union2} />
        <StyledStar src={star} />
        <StyledUnion src={union} />
        <StyledRectangle7 src={rectangle7} />
      </StyledContainer>
      <StyledButton primary icon="PersonFill" onClick={handleLogin}>
        Logg inn
      </StyledButton>
    </StyledWelcome>
  );
};

export default Welcome;
