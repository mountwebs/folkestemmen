import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styled from 'styled-components';
import Login from '../LoginModal/Login';
import ThanksModal from '../ThanksModal/ThanksModal';

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.colors.body.background};
  min-height: 100vh;
  position: relative;
`;

const Layout = ({
  showLoginModal,
  setShowLoginModal,
  showThanksModal,
  setShowThanksModal,
  children,
}) => {
  return (
    <StyledApp>
      <Header
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
      {showLoginModal && <Login setShowLoginModal={setShowLoginModal}></Login>}
      {showThanksModal && (
        <ThanksModal setShowThanksModal={setShowThanksModal}></ThanksModal>
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
