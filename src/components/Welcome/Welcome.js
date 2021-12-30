import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import rectangle3 from '../../assets/welcome-shapes/rectangle3.svg';
import rectangle7 from '../../assets/welcome-shapes/rectangle7.svg';
import union2 from '../../assets/welcome-shapes/union2.svg';
import star from '../../assets/welcome-shapes/star.svg';
import union from '../../assets/welcome-shapes/union.svg';
import starMobile from '../../assets/welcome-shapes/star_mobile.svg';

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
  font-weight: 500;
  font-size: 2rem;

  @media only screen and ${device.sm} {
    font-size: 3.2rem;
  }
`;

const StyledDescription = styled.p`
  padding: 0 30px;
  padding-bottom: 0.5rem;
  padding-top: 1rem;
  max-width: 800px;
  font-weight: 400;
  text-align: center;
  margin: 0 auto;
  font-size: 1.1rem;
  @media only screen and ${device.sm} {
    font-size: 1.8rem;
  }
`;

const StyledButton = styled(Button)`
  background: ${({ theme }) => theme.colors.buttons.header.background};
  color: ${({ theme }) => theme.colors.buttons.header.text};
  font-size: 18px;
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
  width: 299px;
  height: 136px;
  left: -185px;
  top: 130px;

  @media only screen and ${device.sm} {
    width: 300px;
    height: 150px;
    left: -150px;
    top: 220px;
  }
`;

const StyledUnion2 = styled(StyledShape)`
  width: 161px;
  left: -111px;
  top: -45px;

  @media only screen and ${device.sm} {
    width: 200px;
    left: 30px;
    top: 25px;
  }
`;

const StyledStar = styled(StyledShape)`
  display: none;

  @media only screen and ${device.sm} {
    display: block;
    width: 125px;
    left: 200px;
    top: 300px;
  }
`;

const StyledStarMobile = styled(StyledShape)`
  width: 79px;
  right: 0;
  top: 189px;

  @media only screen and ${device.sm} {
    display: none;
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
  width: 75px;
  right: 10px;
  top: -39px;

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
          Vi som jobber i kommunen ønsker innspill fra innbyggere for å gjøre
          det enda bedre å bo og leve i her kommunen.
        </StyledDescription>
        <StyledRectangle3 src={rectangle3} />
        <StyledUnion2 src={union2} />
        <StyledStar src={star} />
        <StyledUnion src={union} />
        <StyledRectangle7 src={rectangle7} />
        <StyledStarMobile src={starMobile} />
      </StyledContainer>
      <StyledButton primary icon="PersonFill" onClick={handleLogin}>
        Logg inn
      </StyledButton>
    </StyledWelcome>
  );
};

export default Welcome;
