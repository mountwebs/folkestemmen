import React from 'react';
import styled from 'styled-components';
import Button from '../../Button/Button';
import device from '../../../constants/breakpoints';

const StyledHeader = styled.header`
  padding-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 100;
  font-family: 'Good Sans', sans-serif;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 1328px;
  padding: 0 10px;
  align-items: center;
  justify-content: center;

  @media only screen and ${device.sm} {
    justify-content: space-between;
    padding: 0 20px 0 15px;
  }
`;

const StyledContentLeft = styled.a`
  z-index: 100;
  font-size: 2rem;
  text-decoration: none;
  display: flex;
  text-align: center;
  color: white;
  font-weight: 400;
  max-width: 10ch;
  font-size: 24.34px;
  line-height: 29px;

  @media only screen and ${device.sm} {
    color: white;
    font-size: 24px;
    line-height: 29px;
    max-width: 100%;
  }

  span {
    margin-left: 0.5rem;
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
    background: #cfe3dd;
    border-radius: 28.5px;
  }

  &:hover {
    background: #0f282c;
    color: #dae7e7;
  }
`;

const Header = ({ setShowWelcomeModal }) => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledContentLeft href="https://www.notodden.kommune.no/">
          <span>Notodden kommune</span>
        </StyledContentLeft>
        <StyledContentRight>
          <StyledLink2 onClick={() => setShowWelcomeModal(true)}>
            Hva er dette?
          </StyledLink2>
        </StyledContentRight>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
