import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import device from '../../constants/breakpoints';
import outsideImg from '../../assets/img/outside.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const StyledContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;

  @media only screen and ${device.sm} {
    display: flex;
  }
`;

const StyledExtra = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${outsideImg});
  background-size: cover;
  position: relative;
  border-radius: 25px;
  z-index: 100;
  display: flex;
  padding: 1.5rem 1rem;
  flex-direction: column;
  color: black;
  margin-bottom: 2rem;
  color: white;
  min-height: 350px;
  justify-content: flex-end;

  @media only screen and ${device.sm} {
    padding: 3rem 40px;
    justify-content: flex-end;
    width: 1000px;
    min-height: 500px;
  }

  h3 {
    font-size: 1.7rem;
    font-weight: 600;
    margin: 0;

    @media only screen and ${device.sm} {
      flex-direction: row;
      font-size: 3.5rem;
    }
  }

  p {
    font-size: 1.1rem;
    font-weight: 200;
    margin-top: 0.8rem;

    @media only screen and ${device.sm} {
      margin-top: 1rem;
      font-size: 1.5rem;
      width: 38ch;
    }
  }
`;

const StyledButton = styled(Button).attrs({
  as: 'a',
})`
  background: #dcff00;
  color: black;
  font-size: 1.1rem;
  border-radius: 12px;
  text-decoration: none;
  padding: 12px 18px;
  align-self: flex-start;

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
        <StyledButton href="http://gamlemunch.no">
          <FontAwesomeIcon icon={faArrowRight} size={'md'} />
          <span>Se mer</span>
        </StyledButton>
      </StyledExtra>
    </StyledContainer>
  );
};

export default Extra;
