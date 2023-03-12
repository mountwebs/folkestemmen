import React, { useContext } from 'react';
import styled from 'styled-components';
import whiteLogo from '../../../assets/innspill-logo.svg';
import Button from '../../Button/Button';
import traversLogo from '../../../assets/travers-logo.svg';
import device from '../../../constants/breakpoints';
import UserContext from '../../../UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import { saveAs } from 'file-saver';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.footer.background};
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
    max-width: 1328px;
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
  font-weight: 400;
  font-size: 1rem;

  @media only screen and ${device.sm} {
    font-size: 20px;
    line-height: 30px;
    max-width: 240px;
  }
`;

const StyledText = styled.div`
  font-size: 1rem;
  color: white;
  opacity: 0.6;
`;

const StyledBranding = styled.a`
  display: flex;
  place-self: center;
  margin-top: 2rem;
  font-size: 0.8rem;
  color: #ffffff;
  align-items: center;
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.button.background.secondary};
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.button.text.secondary};
  font-size: 1rem;
  border-radius: 13.7017px;
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
  display: block;
  color: white;
  padding-top: 0.5rem;
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

  const downloadCsv = () => {
    const userId = userData.userId;
    const jwtKey = localStorage.getItem('jwtKey');

    let headerConfig = {
      headers: {
        userId,
      },
    };

    if (jwtKey) headerConfig.headers.token = `Bearer ${jwtKey}`;

    axios
      .get('https://stiangk.dev/api/notodden/answer/all', headerConfig)
      .then((response) => response.data)
      .then((data) => {
        const items = data;
        const replacer = (key, value) => (value === null ? '' : value); // specify how you want to handle null values here
        const header = Object.keys(items[0]);
        const csv = [
          header.join(','), // header row first
          ...items.map((row) =>
            header
              .map((fieldName) => JSON.stringify(row[fieldName], replacer))
              .join(',')
          ),
        ].join('\r\n');

        var blob = new Blob([csv], { type: '"text/csv;charset=utf-8"' });
        saveAs(blob, 'data.csv');
      })
      .catch((error) => console.log(error));
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
          onClick={() =>
            (window.location = 'mailto:jonas.vesterhus@kul.oslo.kommune.no')
          }
        >
          Kontakt oss
        </StyledButton>
      </StyledContainer>
      <StyledBranding href="https://www.travers.as/">
        Utviklet av &nbsp;
        <img src={traversLogo} alt="" />
      </StyledBranding>
      <StyledGit>
        <StyledA href="https://github.com/mountwebs/iver">
          Kode: Stian Klasbu <FontAwesomeIcon icon={faGithub} size="lg" />
        </StyledA>
      </StyledGit>
      <StyledLink onClick={handleAdminLogin}>Admin</StyledLink>
      {userData.isAdmin && (
        <>
          <StyledLink onClick={handleLogout}>Logg ut</StyledLink>
          <StyledLink onClick={downloadCsv}>Last ned csv</StyledLink>
        </>
      )}
    </StyledFooter>
  );
};

export default Footer;
