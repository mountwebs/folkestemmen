import React from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';

const StyledContainer = styled.div`
  color: #f2f2f2;
  margin: 1.5rem auto 0;
  max-width: 700px;
  height: 256px;
  z-index: 100;
  position: relative;
  padding: 0 10px;

  @media only screen and ${device.sm} {
    height: auto;
    max-width: 700px;
    margin: 0 auto 12rem;
  }
`;

const StyledHeader = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 0;
  margin-top: 0;

  @media only screen and ${device.sm} {
    font-size: 3rem;
  }
`;

const StyledP = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 1.2rem;
  margin-top: 1rem;

  @media only screen and ${device.sm} {
    font-size: 1.8rem;
  }
`;

const Closed = () => {
  return (
    <StyledContainer>
      <StyledHeader>Tusen takk!</StyledHeader>
      <StyledP>
        Innspillsperioden er nå over, og vi takker for alle gode tanker og
        ideer. Innspillene er fortsatt tilgjengelig lenger ned på siden.{' '}
      </StyledP>
    </StyledContainer>
  );
};

export default Closed;
