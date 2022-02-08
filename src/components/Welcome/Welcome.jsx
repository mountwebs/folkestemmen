import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import Rectangle3 from './Rectangle3';
import Rectangle7 from './Rectangle7';
import Star from './Star';
import Union from './Union';
import Union2 from './Union2';
import StarMobile from './StarMobile';

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

const StyledRectangle3 = styled(Rectangle3)`
  position: absolute;
  z-index: -100;
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

const StyledUnion2 = styled(Union2)`
  position: absolute;
  z-index: -100;
  width: 161px;
  left: -111px;
  top: -45px;

  @media only screen and ${device.sm} {
    width: 200px;
    left: 30px;
    top: 25px;
  }
`;

const StyledStar = styled(Star)`
  position: absolute;
  z-index: -100;
  display: none;

  @media only screen and ${device.sm} {
    display: block;
    width: 125px;
    left: 200px;
    top: 300px;
  }
`;

const StyledStarMobile = styled(StarMobile)`
  position: absolute;
  z-index: -100;
  width: 79px;
  right: 0;
  top: 189px;
  color: blue;

  @media only screen and ${device.sm} {
    display: none;
  }
`;

const StyledUnion = styled(Union)`
  position: absolute;
  z-index: -100;
  width: 225px;
  top: 225px;
  right: -50px;
  display: none;
  overflow: auto;

  @media only screen and ${device.sm} {
    display: block;
  }
`;

const StyledRectangle7 = styled(Rectangle7)`
  position: absolute;
  z-index: -100;
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
        <StyledRectangle3 />
        <StyledUnion2 />
        <StyledStar />
        <StyledUnion />
        <StyledRectangle7 />
        <StyledStarMobile />
      </StyledContainer>
      <StyledButton primary icon="PersonFill" onClick={handleLogin}>
        Logg inn
      </StyledButton>
    </StyledWelcome>
  );
};

export default Welcome;
