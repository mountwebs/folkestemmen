import React from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';

const StyledContainer = styled.div`
  margin: auto;
  max-width: 700px;
  margin: 3rem auto 3rem;
  z-index: 100;
  position: relative;
  padding: 0 10px;

  @media only screen and ${device.sm} {
    max-width: 700px;
    margin: 4rem auto 6rem;
  }
`;

const StyledHeader = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 0;

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
