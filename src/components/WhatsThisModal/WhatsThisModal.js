import React, { useState, useContext } from 'react';
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
  padding: 2rem;
  max-width: 90%;
  min-width: 60%;
  background-color: white;
  border-radius: 25px;
  color: white;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and ${device.sm} {
  }
`;

const StyledContent = styled.div`
  color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;

  h1 {
    font-weight: 500;
    margin-bottom: 0;
  }

  p {
    opacity: 0.7;
    margin-bottom: 4rem;
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

const StyledArea = styled.div`
  border-radius: 25px;
  background: #fcfaef;
  padding: 15px 20px;

  p {
    margin: 0;
  }
`;

const WhatsThisModal = ({}) => {
  return (
    <StyledModal>
      <StyledModalMain>
        <StyledContent>
          <h1>Hva er dette</h1>
          <p>
            Randaberg kommune vil skape mer liv i sentrum og lurer på hva du som
            innbygger mener! Derfor har vi laget denne nettsiden. Her kan du
            legge inn dine ønsker og stemme på andre forslag.
          </p>
          <StyledArea>
            <p>Har du andre spørsmål? Ikke nøl med å kontakte oss.</p>
          </StyledArea>
        </StyledContent>
      </StyledModalMain>
    </StyledModal>
  );
};

export default WhatsThisModal;
