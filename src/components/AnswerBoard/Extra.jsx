import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import device from '../../constants/breakpoints';
import backgroundImage from '../../assets/img/background.png';

const StyledContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
`;

const StyledExtra = styled.div`
  background: url(${backgroundImage});
  background-size: cover;
  position: relative;
  border-radius: 25px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  flex-direction: column;
  color: black;
  margin-bottom: 2rem;
  max-width: 878px;
  color: white;

  @media only screen and ${device.sm} {
    padding: 3rem 40px;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 140%;
    text-align: center;
    margin: 0;
    margin-bottom: 1.5rem;

    @media only screen and ${device.sm} {
      flex-direction: row;
      padding: 0 40px;
      font-size: 3rem;
      margin-bottom: 2rem;
    }
  }
`;

const StyledButton = styled(Button)`
  background: white;
  color: black;
  font-size: 1.1rem;

  &:hover {
    opacity: 90%;
  }

  @media only screen and ${device.sm} {
    padding: 1rem 2rem;
  }
`;

const Extra = () => {
  return (
    <StyledContainer>
      <StyledExtra>
        <h3></h3>
        <StyledButton onClick={() => (window.location = '#')}>
          Legg til innspill
        </StyledButton>
      </StyledExtra>
    </StyledContainer>
  );
};

export default Extra;
