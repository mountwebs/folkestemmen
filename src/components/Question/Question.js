import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background.secondary};
  padding: 1.5rem 1rem;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.card.text.secondary};
  border-radius: 10px;
  text-align: center;
`;

const StyledHeader = styled.div`
  padding: 0.5rem 1.5rem;
  background-color: #e5e5e5;
  color: #a5a5a5;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const Question = ({ text }) => {
  return (
    <>
      <StyledHeader>Spørsmål</StyledHeader>
      <StyledCard className="question-card">
        <p className="card-text">{text}</p>
      </StyledCard>
    </>
  );
};

export default Question;
