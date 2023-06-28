import React, { useContext, useState, useEffect } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styled from 'styled-components';
import Login from '../LoginModal/Login';
import WhatsThisModal from '../WhatsThisModal/WhatsThisModal';
import device from '../../constants/breakpoints';
import background from '../../assets/img/background.png';
import backgroundMobile from '../../assets/img/background-mobile.png';
import lilla from '../../assets/img/backgrounds/lilla.jpg';
import roed from '../../assets/img/backgrounds/roed.jpg';
import blaa from '../../assets/img/backgrounds/blaa.jpg';
import gronn from '../../assets/img/backgrounds/gronn.jpg';
import gult from '../../assets/img/backgrounds/gult.jpg';
import UserContext from '../../UserContext';
import CookiePopup from '../CookiePopup/CookiePopup';
import initGA from './../../utils/gaUtils';
import WelcomeModal from '../WelcomeModal/WelcomeModal';
import { useMediaQuery } from 'react-responsive';
import QueryParameterContext from '../../queryParameterProvider';

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  object-position: center;
  height: 469px;
  z-index: 0;

  @media only screen and ${device.sm} {
    height: 899px;
  }
`;

const StyledApp = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
  position: relative;
`;

const StyledQuestionmark = styled.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background: #cfe3dd;
  position: absolute;
  top: 15px;
  right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  span {
    color: ${({ theme }) => theme.colors.questionmark.color};
    font-size: 1.5rem;
    font-weight: 300;
  }

  @media only screen and ${device.sm} {
    display: none;
  }
`;

const Layout = ({
  showLoginModal,
  setShowLoginModal,
  setShowWhatsThisModal,
  showWhatsThisModal,
  showWelcomeModal,
  setShowWelcomeModal,
  children,
}) => {
  const [showCookiePopup, setShowCookiePopup] = useState(false);
  const isXtraSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  const [welcomePage, setWelcomePage] = useState(1);

  const qpData = useContext(QueryParameterContext);
  const userData = useContext(UserContext);

  useEffect(() => {
    if (!userData.cookieAccept) {
      setShowCookiePopup(true);
    }

    if (userData.newUser) {
      setShowWelcomeModal(true);
      userData.setNewUser(false);
    }
  }, [userData, setShowWelcomeModal]);

  const handleAcceptCookie = () => {
    initGA('G-MKP54LV81H');
    userData.setCookieAccept(true);
  };

  let backgroundImg;

  switch (qpData.place) {
    case 'Gaterommet St. Olavs plass':
      backgroundImg = lilla;
      break;
    case 'Nordlig utgang av Korsatunellen':
      backgroundImg = gult;
      break;
    case 'Korsatunellen':
      backgroundImg = gronn;
      break;
    case 'Sørlig inngang til Korsatunellen':
      backgroundImg = blaa;
      break;
    case 'Harald Torsviks plass':
      backgroundImg = roed;
      break;
    default:
      backgroundImg = background;
  }

  return (
    <StyledApp>
      {isXtraSmallScreen ? (
        <StyledImg src={qpData.place ? backgroundImg : backgroundMobile} />
      ) : (
        <StyledImg src={backgroundImg} />
      )}
      <StyledQuestionmark onClick={() => setShowWelcomeModal(true)}>
        <span>?</span>
      </StyledQuestionmark>
      <Header
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
        setShowWhatsThisModal={setShowWhatsThisModal}
        setShowWelcomeModal={setShowWelcomeModal}
        setWelcomePage={setWelcomePage}
      />
      {showLoginModal && <Login setShowLoginModal={setShowLoginModal}></Login>}
      {showWhatsThisModal && (
        <WhatsThisModal
          setShowWhatsThisModal={setShowWhatsThisModal}
        ></WhatsThisModal>
      )}
      {showWelcomeModal && (
        <WelcomeModal
          setShowWelcomeModal={setShowWelcomeModal}
          welcomePage={welcomePage}
          setWelcomePage={setWelcomePage}
        />
      )}
      {showCookiePopup && (
        <CookiePopup
          setShowCookiePopup={setShowCookiePopup}
          handleAcceptCookie={handleAcceptCookie}
        />
      )}
      {children}
      <Footer
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
    </StyledApp>
  );
};

export default Layout;
