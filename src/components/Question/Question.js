import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: #292929;
  padding: 1.5rem 1rem;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: #fff;
  border-radius: 10px;
  text-align: center;
`;

const Question = ({ text }) => {
  return (
    <StyledCard className="question-card">
      <p className="card-text">{text}</p>
    </StyledCard>
  );
};

export default Question;
