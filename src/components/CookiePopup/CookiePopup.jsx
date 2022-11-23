import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  z-index: 1000;
  position: fixed;
  background: white;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
`;

const CookiePopup = () => {
  return <StyledContainer>test</StyledContainer>;
};

export default CookiePopup;
