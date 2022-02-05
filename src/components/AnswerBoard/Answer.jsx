import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import Tag from './Tag';
import Like from '../Like/Like';
import UserContext from '../../UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import AnswerMenu from './AnswerMenu';

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem 1rem;
  margin-bottom: 2rem;
  background-color: ${({ theme, currentUser }) => theme.colors.body.primary};
  border-radius: 25px;

  .fa-ellipsis-h {
    color: ${({ theme }) => theme.colors.text.muted};
  }

  @media only screen and ${device.sm} {
    // -- alternative to make columns more 'masonry' --
    margin-bottom: 35px;
    break-inside: avoid;
    padding: 0 1.5rem 1.5rem 1.2rem;
  }
  .answer {
    &-upper {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    &-date {
      display: flex;
      align-items: flex-end;

      p {
        margin: 1rem 0 0.2rem 0.2rem;
        color: ${({ theme }) => theme.colors.text.muted};
        font-size: 0.8rem;
      }
    }

    &-more-button {
      display: flex;
      align-items: flex-end;
    }

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

const Answer = ({ cardText, tags, answerData, updateLike, deleteAnswer }) => {
  const userData = useContext(UserContext);
  const [activeMenu, setActiveMenu] = useState(false);

  const currentUser = userData.posts.includes(answerData._id);

  return (
    <StyledCard className="answer card-wrapper" currentUser={currentUser}>
      {activeMenu && (
        <AnswerMenu
          setActiveMenu={setActiveMenu}
          deleteAnswer={deleteAnswer}
          answerId={answerData._id}
        />
      )}

      <div className="answer-upper">
        <div className="answer-date">
          <p>{formatDate(answerData.createdAt)}</p>
        </div>
        {currentUser && (
          <a
            onClick={() => {
              setActiveMenu(true);
            }}
            className="answer-more-button"
          >
            <FontAwesomeIcon icon={faEllipsisH} size={'sm'} />
          </a>
        )}
      </div>

      <div className="answer-content">
        <p className="card-text">{cardText}</p>
      </div>
      <div className="answer-details">
        <div>{tags && <Tag>{tags}</Tag>}</div>
        <Like answerData={answerData} updateLike={updateLike} />
      </div>
    </StyledCard>
  );
};

export default Answer;
