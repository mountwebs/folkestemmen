import React from 'react';
import brownLogo from '../../../assets/logo-brown.svg';
import styled from 'styled-components';
import Button from '../../Button/Button';
import device from '../../../constants/breakpoints';
import Login from '../../LoginModal/Login';

const StyledHeader = styled.header`
  height: 103px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledContainer = styled.div`
  height: 103px;
  display: flex;
  flex-grow: 1;
  max-width: 1020px;
  padding: 0 10px;
  align-items: center;
  justify-content: center;

  @media only screen and ${device.sm} {
    justify-content: space-between;
    padding: 0 20px 0 15px;
  }
`;

const StyledContentRight = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  @media only screen and ${device.sm} {
  }
`;

const StyledLogo = styled.img`
  max-height: 40px;
  margin: 10px 57.5px;

  @media only screen and ${device.sm} {
    margin: 0;
  }
`;

const StyledButton = styled(Button)`
  font-size: 1rem;
  display: none;
  background-color: ${({ theme }) => theme.colors.buttons.header.background};

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
        <StyledLogo src={brownLogo} alt="Beta folkestemmen - logo" />
        <StyledContentRight>
          <StyledLink href="mailto:erlend@travers.as">Kontakt oss</StyledLink>
          <StyledButton primary onClick={handleLogin}>
            Logg inn
          </StyledButton>
        </StyledContentRight>
        {showModal && <Login setShowModal={setShowModal}></Login>}
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
