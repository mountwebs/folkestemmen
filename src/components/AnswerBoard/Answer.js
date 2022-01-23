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
    padding: 0 1.5rem 1.5rem 1.2rem;
  }
  .answer {
    &-content {
      color: ${({ theme }) => theme.colors.text.primary};
      font-size: 1.4rem;
      overflow-wrap: break-word;
      padding-left: 0.2rem;

      p {
        margin-top: 0.8rem;
      }
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
        margin: 1rem 0 0 0.2rem;
        color: ${({ theme }) => theme.colors.text.muted};
        font-size: 0.8rem;
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

const twoNumberDate = (date) => {
  return date.toString().length > 1 ? date : '0' + date;
};

const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  return `${twoNumberDate(date.getDate())}.${twoNumberDate(
    date.getMonth() + 1
  )}.${date.getFullYear().toString().substring(2, 4)}`;
};

const Answer = ({ cardText, tags, answerData, updateAnswer }) => {
  return (
    <StyledCard className="answer card-wrapper">
      <div className="answer-date">
        {/* {answerData._id === '61d3516910397a00164feb15' &&
          console.log(answerData.createdAt)} */}
        <p>{formatDate(answerData.createdAt)}</p>
      </div>
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
