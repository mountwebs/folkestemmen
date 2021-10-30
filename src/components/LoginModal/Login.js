import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import device from '../../constants/breakpoints';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

const StyledModalMain = styled.div`
  position: fixed;
  padding: 2rem;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.buttons.header.background};
  border-radius: 10px;
  color: white;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and ${device.sm} {
    max-width: 700px;
  }
`;

const StyledCloseButton = styled(Button)`
  position: absolute;
  right: 1rem;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.body.primary};
  background-color: ${({ theme }) => theme.colors.buttons.header.background};
`;

const Login = ({ setShowModal }) => {
  return (
    <StyledModal>
      <StyledModalMain>
        <StyledCloseButton onClick={() => setShowModal(false)}>
          X
        </StyledCloseButton>
        <h4>Hei!</h4>
        <p>
          Vi jobber for tiden med å implementere en logg-inn funksjon. I
          mellomtiden trenger du ikke å logge inn for å legge inn innspill.
          Lykke til!
        </p>
      </StyledModalMain>
    </StyledModal>
  );
};

export default Login;
