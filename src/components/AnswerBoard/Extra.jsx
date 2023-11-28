import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import device from '../../constants/breakpoints';
import backgroundImage from '../../assets/img/background-mobile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const StyledContainer = styled.section`
  width: 100%;
  display: none;
  justify-content: center;

  @media only screen and ${device.sm} {
    display: flex;
  }
`;

const StyledExtra = styled.div`
  background: url(${backgroundImage});
  background-size: cover;
  position: relative;
  border-radius: 25px;
  z-index: 100;
  display: flex;
  padding: 1.5rem 1rem;
  flex-direction: column;
  color: black;
  margin-bottom: 2rem;
  width: 1000px;
  color: white;

  @media only screen and ${device.sm} {
    padding: 3rem 40px;
    justify-content: flex-end;
    min-height: 500px;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0;

    @media only screen and ${device.sm} {
      flex-direction: row;
      font-size: 3.5rem;
    }
  }

  p {
    width: 38ch;
    font-size: 1.5rem;
    font-weight: 200;
  }
`;

const StyledButton = styled(Button)`
  background: #dcff00;
  color: black;
  font-size: 1.1rem;

  &:hover {
    opacity: 90%;
  }

  @media only screen and ${device.sm} {
    padding: 1rem 2rem;
    align-self: flex-start;
  }

  span {
    margin-left: 0.5rem;
  }
`;

const Extra = () => {
  return (
    <StyledContainer>
      <StyledExtra>
        <h3>Besøk Gamle Munch</h3>
        <p>
          Opplev utstillinger, arrangementer, konserter, kurs og aktiviteter.
          Sammen skaper vi østkantens nye kunst- og kulturhus.
        </p>
        <StyledButton onClick={() => (window.location = '#')}>
          <FontAwesomeIcon icon={faArrowRight} size={'md'} />
          <span>Se mer</span>
        </StyledButton>
      </StyledExtra>
    </StyledContainer>
  );
};

export default Extra;
