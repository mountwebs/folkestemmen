import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import Tag from './Tag';
import Like from '../Like/Like';
import UserContext from '../../UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import AnswerMenu from './AnswerMenu';
import AutosizeInput from 'react-input-autosize';
import { useMediaQuery } from 'react-responsive';
import TextareaAutosize from 'react-textarea-autosize';
import Button from '../Button/Button';

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

    &-content {
      color: ${({ theme }) => theme.colors.text.primary};
      font-size: 1.4rem;
      overflow-wrap: break-word;
      padding-left: 0.2rem;

      p {
        margin-top: 0.8rem;
      }

      &-textarea {
        margin-top: 0.8rem;
        margin-bottom: 1rem;
        border: none;
        outline: none;
        resize: none;
        height: inherit;
        width: 100%;
        font-weight: 500;
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

const StyledTag = styled(Tag)`
  padding: 0.5rem 0.3rem;

  @media only screen and ${device.sm} {
    padding: 0.5rem;
  }
`;

const StyledDots = styled.span`
  display: flex;
  align-items: flex-end;
  cursor: pointer;
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.buttons.post.background};
  color: black;

  :disabled {
    opacity: 50%;
  }

  &:hover {
    filter: brightness(90%);
  }

  @media only screen and ${device.sm} {
    font-size: 1rem;
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

const Answer = ({
  cardText,
  tags,
  answerData,
  updateLike,
  deleteAnswer,
  updateAnswer,
}) => {
  const userData = useContext(UserContext);
  const [activeMenu, setActiveMenu] = useState(false);
  const [editable, setEditable] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState(answerData.text);
  const [temaValue, setTemaValue] = useState(answerData.tags);
  const isXtraSmallScreen = useMediaQuery({ query: '(max-width: 320px)' });

  const currentUser = userData.posts.includes(answerData._id);

  useEffect(() => {
    setEditable(false);
    setTextAreaValue(answerData.text);
    setTemaValue(answerData.tags);
  }, [answerData]);

  const handleSubmit = async () => {
    await updateAnswer(answerData._id, {
      text: textAreaValue,
      tags: temaValue,
    });
    setEditable(false);
  };

  return (
    <StyledCard className="answer card-wrapper" currentUser={currentUser}>
      {activeMenu && (
        <AnswerMenu
          setActiveMenu={setActiveMenu}
          deleteAnswer={deleteAnswer}
          answerId={answerData._id}
          setEditable={setEditable}
          editable={editable}
        />
      )}

      <div className="answer-upper">
        <div className="answer-date">
          <p>{formatDate(answerData.createdAt)}</p>
        </div>
        {(currentUser || userData.isAdmin) && (
          <StyledDots
            onClick={() => {
              setActiveMenu(true);
            }}
          >
            <FontAwesomeIcon icon={faEllipsisH} size={'sm'} />
          </StyledDots>
        )}
      </div>

      <div className="answer-content">
        {editable ? (
          <TextareaAutosize
            autoFocus
            onChange={(e) => setTextAreaValue(e.target.value)}
            defaultValue={textAreaValue}
            className="answer-content-textarea"
            maxLength="250"
          />
        ) : (
          <p className="card-text">{answerData.text}</p>
        )}
      </div>
      <div className="answer-details">
        <div>
          {editable ? (
            <StyledTag>
              <AutosizeInput
                type="text"
                className="input-tema"
                onChange={(e) => setTemaValue(e.target.value)}
                value={temaValue}
                maxLength={isXtraSmallScreen ? 20 : 25}
                inputStyle={{
                  borderStyle: 'none',
                  outline: 'none',
                  backgroundColor: 'inherit',
                }}
              />
            </StyledTag>
          ) : (
            tags && <Tag>{tags}</Tag>
          )}
        </div>
        {editable ? (
          <StyledButton
            onClick={handleSubmit}
            disabled={textAreaValue ? false : true}
          >
            Ferdig
          </StyledButton>
        ) : (
          <Like answerData={answerData} updateLike={updateLike} />
        )}
      </div>
    </StyledCard>
  );
};

export default Answer;
