import React, { useContext, useState, useEffect, useRef } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styled from 'styled-components';
import Login from '../LoginModal/Login';
import WhatsThisModal from '../WhatsThisModal/WhatsThisModal';
import device from '../../constants/breakpoints';
import background from '../../assets/img/background.png';
import backgroundMobile from '../../assets/img/background-mobile.png';
import UserContext from '../../UserContext';
import CookiePopup from '../CookiePopup/CookiePopup';
import initGA from './../../utils/gaUtils';
import WelcomeModal from '../WelcomeModal/WelcomeModal';

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  height: 469px;
  z-index: 0;

  @media only screen and ${device.sm} {
    height: 42rem;
  }
`;

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.colors.body.background};
  min-height: 100vh;
  position: relative;
`;

const StyledQuestionmark = styled.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background: ${({ theme }) => theme.colors.questionmark.background};
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
  const windowWidth = useRef(window.innerWidth);

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

  return (
    <StyledApp>
      {windowWidth.current <= 768 ? (
        <StyledImg src={backgroundMobile} />
      ) : (
        <StyledImg src={background} />
      )}
      <StyledQuestionmark onClick={() => setShowWelcomeModal(true)}>
        <span>?</span>
      </StyledQuestionmark>
      <Header
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
        setShowWhatsThisModal={setShowWhatsThisModal}
        setShowWelcomeModal={setShowWelcomeModal}
      />
      {showLoginModal && <Login setShowLoginModal={setShowLoginModal}></Login>}
      {showWhatsThisModal && (
        <WhatsThisModal
          setShowWhatsThisModal={setShowWhatsThisModal}
        ></WhatsThisModal>
      )}
      {showWelcomeModal && (
        <WelcomeModal setShowWelcomeModal={setShowWelcomeModal} />
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
