import React from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledHeader = styled.div`
  padding: 0.5rem 1.5rem;
  color: ${({theme}) => theme.colors.text.secondary};
  border: 1px solid;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-align: center;

  @media only screen and ${device.sm} {
    font-size: 1rem;
  }
`;

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.question.background};
  padding: 1.5rem 1rem;
  margin: 0 5px;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.question.text};
  border-radius: 10px;
  text-align: center;

  @media only screen and ${device.sm} {
    font-size: 2.5rem;
  }
`;

const Question = ({ text }) => {
  return (
    <>
    <StyledHeaderContainer>
      <StyledHeader>Ukens spørsmål</StyledHeader>
      </StyledHeaderContainer>
      <StyledCard className="question-card">
        <p className="card-text">{text}</p>
      </StyledCard>
    </>
  );
};

export default Question;
