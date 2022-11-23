import React, { useContext } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styled from 'styled-components';
import Login from '../LoginModal/Login';
import WhatsThisModal from '../WhatsThisModal/WhatsThisModal';
import device from '../../constants/breakpoints';
import munchBackground from '../../assets/img/munch-background.png';
import UserContext from '../../UserContext';
import CookiePopup from '../CookiePopup/CookiePopup';

const StyledImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  object-fit: cover;
  height: 25rem;
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
  showCookiePopup,
  setShowCookiePopup,
  children,
}) => {
  const userData = useContext(UserContext);
  if (userData.newUser) {
    setShowWhatsThisModal(true);
    userData.setNewUser(false);
  }
  return (
    <StyledApp>
      <StyledImg src={munchBackground} />
      <StyledQuestionmark onClick={() => setShowWhatsThisModal(true)}>
        <span>?</span>
      </StyledQuestionmark>
      <Header
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
        setShowWhatsThisModal={setShowWhatsThisModal}
      />
      {showLoginModal && <Login setShowLoginModal={setShowLoginModal}></Login>}
      {showWhatsThisModal && (
        <WhatsThisModal
          setShowWhatsThisModal={setShowWhatsThisModal}
        ></WhatsThisModal>
      )}
      {showCookiePopup && (
        <CookiePopup
          showCookiePopup={showCookiePopup}
          setShowCookiePopup={setShowCookiePopup}
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
