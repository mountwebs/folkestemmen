import React from 'react';
import styled from 'styled-components';
import Button from '../../Button/Button';
import device from '../../../constants/breakpoints';
import andoyLogo from '../../../assets/andoy-logo.svg';

const StyledHeader = styled.header`
  padding-top: 3.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  font-family: 'Good Sans', sans-serif;

  @media only screen and ${device.sm} {
    padding-top: 3.75rem;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 1328px;
  padding: 0 2rem;
  align-items: center;

  @media only screen and ${device.sm} {
    justify-content: space-between;
    padding: 0 20px 0 15px;
  }
`;

const StyledContentLeft = styled.div`
  z-index: 100;
  font-size: 2rem;
  text-decoration: none;
  display: flex;
  color: black;
  font-weight: 400;
  font-size: 24.34px;
  line-height: 29px;

  span {
    margin-left: 0.5rem;
  }

  img {
    width: 22px;
  }

  @media only screen and ${device.sm} {
    font-size: 24px;
    line-height: 29px;
    max-width: 100%;
  }
  }
`;

const StyledContentRight = styled.div`
  z-index: 100;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  @media only screen and ${device.sm} {
  }
`;

const StyledLink = styled.a`
  display: none;
  font-size: 1.3rem;
  color: black;
  font-weight: 400;
  font-family: 'DM Sans', sans-serif;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  @media only screen and ${device.sm} {
    text-decoration: unset;
    display: block;
    font-size: 21.6px;
    line-height: 28px;
  }
`;

const StyledLink2 = styled.a`
  display: none;
  font-size: 1.3rem;
  color: black;
  font-weight: 400;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  @media only screen and ${device.sm} {
    text-decoration: unset;
    display: block;
    font-size: 21px;
    line-height: 29px;
    padding: 12px 27px;
    background: #640F53;
    border-radius: 10px;
    color: #fff;
  }

  &:hover {
    filter: brightness(80%);
  }
`;

const Header = ({ setShowWelcomeModal }) => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledContentLeft>
          <img src={andoyLogo} alt="Andøy logo" />
          <span>Andøy kommune</span>
        </StyledContentLeft>
        <StyledContentRight>
          <StyledLink2 onClick={() => setShowWelcomeModal(true)}>
            Info
          </StyledLink2>

        </StyledContentRight>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
