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
  z-index: 1000;
`;

const StyledModalMain = styled.div`
  position: fixed;
  padding: 1rem;
  width: 90%;
  background-color: white;
  border-radius: 25px;
  color: white;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media only screen and ${device.sm} {
    width: auto;
    max-width: 90%;
    min-width: 60%;
    padding: 2rem;
  }
`;

const StyledContent = styled.div`
  color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 1rem;
  position: relative;

  h1 {
    font-weight: 500;
    margin-bottom: 0;
    font-size: 1.5rem;
  }

  p {
    opacity: 0.7;
    margin-bottom: 2rem;
    font-weight: 400;
  }

  @media only screen and ${device.sm} {
    font-size: 1.3rem;

    h1 {
      font-size: 2.5rem;
    }

    p {
      margin-bottom: 4rem;
    }
  }
`;

const StyledArea = styled.div`
  border-radius: 25px;
  background: #fcfaef;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  p {
    margin: 0;
    text-wrap: balance;
  }

  > * {
    &:last-child {
      margin-top: 1rem;
    }
  }

  @media only screen and ${device.sm} {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    text-align: left;

    > * {
      &:last-child {
        margin-left: 20px;
      }
    }
  }
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.buttons.post.background};
  color: black;

  :disabled {
    opacity: 50%;
  }

  &:hover {
    filter: brightness(90%);
  }

  @media only screen and ${device.sm} {
    font-size: 1rem;
  }
`;

const StyledX = styled.div`
  font-size: 1.5rem;
  position: absolute;
  right: 0;
  top: 0;
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    background: #f2f2f2;
  }

  span {
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
  }
`;

const WhatsThisModal = ({ setShowWhatsThisModal }) => {
  const handleX = () => {
    setShowWhatsThisModal(false);
  };
  return (
    <StyledModal>
      <StyledModalMain>
        <StyledContent>
          <StyledX onClick={handleX}>
            <span>x</span>
          </StyledX>
          <h1>Hva er dette?</h1>
          <p>
            Randaberg kommune vil skape mer liv i sentrum og lurer på hva du som
            innbygger mener! Derfor har vi laget denne nettsiden. Her kan du
            legge inn dine ønsker og stemme på andre forslag.
          </p>
          <StyledArea>
            <p>
              Har du andre spørsmål?
              <br />
              Ikke nøl med å kontakte oss.
            </p>
            <StyledButton
              onClick={() => (window.location = 'mailto:erlend@travers.as')}
            >
              Kontakt oss
            </StyledButton>
          </StyledArea>
        </StyledContent>
      </StyledModalMain>
    </StyledModal>
  );
};

export default WhatsThisModal;
