import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styled from 'styled-components';
import Login from '../LoginModal/Login';

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.colors.body.background};
  min-height: 100vh;
  position: relative;
`;

const Layout = ({ showModal, setShowModal, children }) => {
  return (
    <StyledApp>
      <Header showModal={showModal} setShowModal={setShowModal} />
      {showModal && <Login setShowModal={setShowModal}></Login>}
      {children}
      <Footer />
    </StyledApp>
  );
};

export default Layout;
