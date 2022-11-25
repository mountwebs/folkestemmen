import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../../UserContext';

const StyledContainer = styled.div`
  z-index: 500;
  position: fixed;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.8rem 1.2rem;
  background: #e1e1e1;
  border-radius: 10px;
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

const StyledSpan = styled.span`
  font-size: 15px;
  font-weight: 400;
  margin-right: 1rem;
  color: black;
`;

const StyledButton = styled.button`
  padding: 12px 18px;
  font-size: 17px;
  font-weight: 400;
  border-radius: 10px;
  background: white;

  &:not(:last-of-type) {
    margin-right: 0.5rem;
  }
`;

const CookiePopup = ({ setShowCookiePopup, handleAcceptCookie }) => {
  const userData = useContext(UserContext);

  return (
    <StyledContainer>
      <StyledSpan>Vi bruker Cookies</StyledSpan>
      <StyledButton
        onClick={() => {
          setShowCookiePopup(false);
          handleAcceptCookie();
        }}
      >
        Godta
      </StyledButton>
      <StyledButton
        onClick={() => {
          setShowCookiePopup(false);
        }}
      >
        Avslå
      </StyledButton>
    </StyledContainer>
  );
};

export default CookiePopup;
