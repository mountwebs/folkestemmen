import React from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.3rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.body.primary};
  border-radius: 20px;
  .answer {
    &-content {
      color: ${({ theme }) => theme.colors.text.primary};
      font-size: 1.4rem;
    }

    &-details {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-user {
      display: flex;
      align-items: center;

      p {
        margin-left: 0.4rem;
        color: ${({ theme }) => theme.colors.text.muted};
        font-size: 1rem;
      }
    }

    &-tema {
      padding: 0.5rem 1.5rem;
      background-color: ${({ theme }) =>
        theme.colors.button.background.disabled};
      color: ${({ theme }) => theme.colors.button.text.disabled};
      border-radius: 20px;
      font-size: 1rem;
    }
    &-thumbnail-wrapper {
      width: 25px;
      height: 25px;
      background-color: ${({ theme }) =>
        theme.colors.button.background.disabled};
      border-radius: 50%;
    }
  }
`;

const Answer = ({ cardText, temaText, userName }) => {
  return (
    <StyledCard className="answer card-wrapper">
      <div className="answer-content">
        <p className="card-text">{cardText}</p>
      </div>

      <div className="answer-details">
        <div className="answer-user">
          <div className="answer-thumbnail-wrapper">
            <img src="" alt="" className="user-thumbnail" />
          </div>
          <p>{userName}</p>
        </div>
        {temaText && <span className="answer-tema">{temaText}</span>}
      </div>
    </StyledCard>
  );
};

export default Answer;
