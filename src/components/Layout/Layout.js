import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styled from 'styled-components';

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.colors.body.background};
  min-height: 100vh;
  position: relative;
`;

const Layout = (props) => {
  return (
    <StyledApp>
      <Header showModal={props.showModal} setShowModal={props.setShowModal} />
      {props.children}
      <Footer />
    </StyledApp>
  );
};

export default Layout;
