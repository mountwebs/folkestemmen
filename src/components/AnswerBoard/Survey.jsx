import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import device from '../../constants/breakpoints';

const StyledExtra = styled.div`
  background: #eeece0;
  position: relative;
  width: 100%;
  border-radius: 25px;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 25px;
  font-size: 1rem;
  flex-direction: column;
  color: black;
  margin-bottom: 3rem;
  margin-right: auto;
  margin-left: auto;

  @media only screen and ${device.sm} {
    flex-direction: row;
    padding: 1.5rem 40px;
    font-size: 1.3rem;
    width: 75%;
    margin-bottom: 7rem;
  }
`;

const StyledButton = styled.a`
  white-space: nowrap;
  border-radius: 20px;
  padding: ${(props) => (props.icon ? '0.5rem 20px' : '0.5rem 1.6rem')};
  border: none;
  background: ${(props) => (props.primary ? '#292929' : '#e5e5e5')};
  color: ${(props) => (props.primary ? 'white' : '#a5a5a5')};
  background: #333;
  color: white;
  font-size: 1.1rem;
  margin: 1rem 0;
  text-decoration: none;

  @media only screen and ${device.sm} {
    padding: 0.8rem 35px;
    margin-left: 60px;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const Extra = () => {
  return (
    <StyledExtra>
      <p>
        <strong>Har du 5 min ekstra?</strong> Svar på spørreundersøkelse og vær
        med i trekningen av gavekort!
      </p>
      <StyledButton href="https://docs.google.com/forms/d/e/1FAIpQLScH1JbsLJdD5p9ueH4TvJY4K8pn3iTNKQmQALOa7sRdYjnfiA/viewform">
        Svar på undersøkelse
      </StyledButton>
    </StyledExtra>
  );
};

export default Extra;
