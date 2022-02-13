import React from 'react';
import Button from '../Button/Button';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import Rectangle3 from './Rectangle3';
import Rectangle3Mobile from './Rectangle3Mobile';

import Rectangle7 from './Rectangle7';
import Star from './Star';
import Union from './Union';
import Union2 from './Union2';
import StarMobile from './StarMobile';
import RandabergLogo from './RandabergLogo';

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
  }
`;

const StyledContainer = styled.div`
  overflow: hidden;
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

const StyledStar = styled(Star)`
  position: absolute;
  z-index: -100;
  width: 150px;
  color: #c3e679;
  left: -63px;
  top: -161px;

  @media only screen and ${device.sm} {
    display: block;
    top: -111px;
    width: 150px;
  }
`;

const StyledStar2 = styled(Star)`
  position: absolute;
  z-index: -100;
  color: #298d75;
  left: -63px;
  top: -161px;
  display: none;

  @media only screen and ${device.sm} {
    height: 110px;
    display: block;
    top: 551px;
    width: 150px;
  }
`;

const StyledRectangle3 = styled(Rectangle3)`
  position: absolute;
  z-index: -100;
  width: 120px;
  height: 136px;
  right: -50px;
  top: -90px;
  color: #ffe074;
  display: none;

  @media only screen and ${device.sm} {
    display: block;
    width: 300px;
    height: 150px;
    right: 0;
    top: 0;
  }
`;

const StyledRectangle3Mobile = styled(Rectangle3Mobile)`
  position: absolute;
  z-index: -100;
  right: 0;
  top: -70px;
  color: #ffe074;

  @media only screen and ${device.sm} {
    display: none;
  }
`;

const StyledRandabergLogo = styled(RandabergLogo)`
  position: absolute;
  width: 299px;
  height: 136px;
  color: #3a83c4;
  display: none;

  @media only screen and ${device.sm} {
    display: block;
    width: 300px;
    height: 150px;
    left: -70px;
    top: 65px;
    z-index: -100;
  }
`;

const StyledUnion = styled(Union)`
  position: absolute;
  z-index: -100;
  width: 225px;
  top: 225px;
  right: -50px;
  display: none;

  @media only screen and ${device.sm} {
    display: block;
    right: 0;
    top: 700px;
    color: #a0d2c0;
  }
`;

const StyledUnion2 = styled(Union2)`
  position: absolute;
  z-index: -100;
  width: 161px;
  left: -111px;
  top: -45px;
  display: none;

  @media only screen and ${device.sm} {
    width: 200px;
    left: 30px;
    top: 25px;
  }
`;

const StyledStarMobile = styled(StarMobile)`
  display: none;

  @media only screen and ${device.sm} {
  }
`;

const StyledRectangle7 = styled(Rectangle7)`
  position: absolute;
  z-index: -100;
  width: 75px;
  right: 10px;
  top: -39px;
  display: none;

  @media only screen and ${device.sm} {
    width: 125px;
    right: 75px;
    top: 0;
  }
`;

const Welcome = () => {
  return (
    <StyledWelcome>
      <StyledContainer>
        <StyledRectangle3Mobile />
        <StyledRectangle3 />
        <StyledRandabergLogo />
        <StyledStarMobile />
        <StyledUnion />
        <StyledStar2 />

        <StyledStar />

        <StyledUnion2 />
        <StyledRectangle7 />
      </StyledContainer>
    </StyledWelcome>
  );
};

export default Welcome;
