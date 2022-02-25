import React, { useContext } from 'react';
import styled from 'styled-components';
import whiteLogo from '../../../assets/logo-white.svg';
import Button from '../../Button/Button';
import traversLogo from '../../../assets/travers-logo.svg';
import device from '../../../constants/breakpoints';
import UserContext from '../../../UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #3a5108;
  position: relative;
  bottom: 0;
  color: #a5a5a5;
  padding: 3rem;
  border-radius: 20px 20px 0 0;

  @media only screen and ${device.sm} {
    border-radius: 50px 50px 0 0;
    padding-top: 6rem;
    padding-right: 10%;
    padding-left: 10%;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  @media only screen and ${device.sm} {
    flex-direction: row;
    max-width: 1020px;
    padding: 0 25px;
  }
`;

const StyledLogoContainer = styled.div`
  flex: 1 0;
  padding-right: 8px;
  display: none;

  @media only screen and ${device.sm} {
    display: block;
  }
`;

const StyledLogo = styled.img`
  height: 38px;
`;

const StyledCTA = styled.div`
  max-width: 200px;
  color: #f2f2f2;
  font-weight: 300;
  font-size: 1rem;

  @media only screen and ${device.sm} {
    max-width: 200px;
  }
`;

const StyledText = styled.div`
  font-size: 0.8rem;
`;

const StyledBranding = styled.small`
  display: flex;
  place-self: center;
  margin-top: 2rem;
  font-size: 0.8rem;
  color: #ffffff;
  align-items: center;
`;

const StyledButton = styled(Button)`
  background-color: #fff3c7;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-top: 1rem;
  color: #3a5108;
  font-size: 1rem;

  @media only screen and ${device.sm} {
    margin-left: 2rem;
    margin-top: 0rem;
  }
`;

const StyledSpan = styled.span`
  color: white;
  font-size: small;
`;

const StyledGit = styled(StyledSpan)`
  margin: 0.3rem 0 1rem;
`;

const StyledLink = styled(StyledSpan)`
  text-decoration: underline;
  cursor: pointer;
`;

const StyledA = styled.a`
  color: white;
`;

const Footer = ({ showLoginModal, setShowLoginModal }) => {
  const userData = useContext(UserContext);

  const handleAdminLogin = () => {
    setShowLoginModal(!showLoginModal);
  };

  const handleLogout = () => {
    userData.setIsAdmin(false);
    localStorage.removeItem('jwtKey');
  };

  return (
    <StyledFooter>
      <StyledContainer>
        <StyledLogoContainer>
          <StyledLogo src={whiteLogo}></StyledLogo>
          <StyledText>Medvirkning rett i lomma.</StyledText>
        </StyledLogoContainer>
        <StyledCTA>
          Har du spørsmål eller vil du gi oss tilbakemelding?
        </StyledCTA>
        <StyledButton
          onClick={() => (window.location = 'mailto:erlend@travers.as')}
        >
          Kontakt oss
        </StyledButton>
      </StyledContainer>
      <StyledBranding>
        Utviklet av &nbsp;
        <img src={traversLogo} alt="" />
      </StyledBranding>
      <StyledGit>
        <StyledA href="https://github.com/mountwebs/iver">
          Åpen kildekode <FontAwesomeIcon icon={faGithub} size="lg" />
        </StyledA>
      </StyledGit>
      <StyledLink onClick={handleAdminLogin}>Admin</StyledLink>
      {userData.isAdmin && (
        <StyledLink onClick={handleLogout}>Logg ut</StyledLink>
      )}
    </StyledFooter>
  );
};

export default Footer;
