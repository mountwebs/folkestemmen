import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styled from 'styled-components';
import Login from '../LoginModal/Login';
import WhatsThisModal from '../WhatsThisModal/WhatsThisModal';

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.colors.body.background};
  min-height: 100vh;
  position: relative;
`;

const Layout = ({
  showLoginModal,
  setShowLoginModal,
  setShowWhatsThisModal,
  showWhatsThisModal,
  children,
}) => {
  return (
    <StyledApp>
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
      {children}
      <Footer
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
    </StyledApp>
  );
};

export default Layout;
