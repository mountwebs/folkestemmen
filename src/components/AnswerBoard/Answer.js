import React from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import Tag from './Tag';
import Like from '../Like/Like';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem 1rem;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.body.primary};
  border-radius: 25px;

  @media only screen and ${device.sm} {
    // -- alternative to make columns more 'masonry' --
    margin-bottom: 35px;
    break-inside: avoid;
    padding: 0 1.5rem 1.5rem 1.5rem;
  }
  .answer {
    &-content {
      color: ${({ theme }) => theme.colors.text.primary};
      font-size: 1.4rem;
      overflow-wrap: break-word;
    }

    &-details {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-date {
      display: flex;
      align-items: flex-end;

      p {
        margin: 0;
        color: ${({ theme }) => theme.colors.text.muted};
        font-size: 1rem;
        padding: 0;
      }
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

const Answer = ({ cardText, tags, answerData, updateAnswer }) => {
  return (
    <StyledCard className="answer card-wrapper">
      <div className="answer-content">
        <p className="card-text">{cardText}</p>
      </div>

      <div className="answer-details">
        <div>{tags && <Tag>{tags}</Tag>}</div>
        <Like updateAnswer={updateAnswer} answerData={answerData} />
      </div>
    </StyledCard>
  );
};

export default Answer;
