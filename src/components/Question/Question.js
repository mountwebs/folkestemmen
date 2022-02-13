import React from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';

const StyledHeadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledHeading = styled.div`
  padding: 0.5rem 1.5rem;
  color: ${({ theme }) => theme.colors.questionHeader.text};
  background: ${({ theme }) => theme.colors.questionHeader.background};
  border-radius: 20px;
  display: inline-block;
  margin-top: 1rem;
  text-align: center;
  z-index: 80;
  font-size: 0.9rem;

  @media only screen and ${device.sm} {
    font-size: 1rem;
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCard = styled.div`
  background-color: white;
  margin-bottom: 1rem;
  padding: 1rem 1rem;
  margin: 0.5rem 5px 0 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.question.text};
  border-radius: 25px;
  text-align: center;
  z-index: 100;

  @media only screen and ${device.sm} {
    font-size: 2.5rem;
    background-color: ${({ theme }) => theme.colors.question.background};
    max-width: 650px;
    border-radius: 50px;
  }
`;

const Question = () => {
  return (
    <>
      <StyledHeadingContainer>
        <StyledHeading>Spørsmål</StyledHeading>
      </StyledHeadingContainer>
      <StyledCardContainer>
        <StyledCard className="question-card">
          <p className="card-text">Hva ønsker du deg i Randaberg sentrum?</p>
        </StyledCard>
      </StyledCardContainer>
    </>
  );
};

export default Question;
