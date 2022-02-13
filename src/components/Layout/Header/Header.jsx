import React from 'react';
import styled from 'styled-components';
import Button from '../../Button/Button';
import device from '../../../constants/breakpoints';

const StyledHeader = styled.header`
  height: 103px;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 100;
`;

const StyledContainer = styled.div`
  height: 11rem;
  display: flex;
  flex-grow: 1;
  max-width: 1020px;
  padding: 0 10px;
  align-items: center;
  justify-content: center;

  @media only screen and ${device.sm} {
    height: 103px;
    justify-content: space-between;
    padding: 0 20px 0 15px;
  }
`;

const StyledContentLeft = styled.span`
  z-index: 100;
  font-size: 2.2rem;

  @media only screen and ${device.sm} {
    font-size: 1.7rem;
  }
`;

const StyledContentRight = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  @media only screen and ${device.sm} {
  }
`;

const StyledButton = styled(Button)`
  font-size: 1.2rem;
  display: none;
  background-color: ${({ theme }) => theme.colors.buttons.header.background};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.buttons.header.text};

  @media only screen and ${device.sm} {
    display: block;
  }
`;

const StyledLink = styled.a`
  display: none;
  margin-right: 1.5rem;
  font-size: 1.3rem;

  @media only screen and ${device.sm} {
    color: inherit;
    text-decoration: unset;
    display: block;
  }
`;

const Header = ({ showModal, setShowModal }) => {
  const handleLogin = () => {
    setShowModal(!showModal);
  };

  return (
    <StyledHeader>
      <StyledContainer>
        <StyledContentLeft>Liv i sentrum</StyledContentLeft>
        <StyledContentRight>
          <StyledLink onClick={handleLogin}>Hva er dette?</StyledLink>
          <StyledButton
            onClick={() => (window.location = 'mailto:erlend@travers.as')}
          >
            Kontakt oss
          </StyledButton>
        </StyledContentRight>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
