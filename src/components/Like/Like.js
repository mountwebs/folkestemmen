import React, { useState, useContext, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

import UserContext from '../../UserContext';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'DM Sans', sans-serif;
  color: ${({ theme }) => theme.colors.text.primary};
  color: ${({ theme, liked }) => (liked ? '#F34C90' : theme.colors.text.muted)};
  transform: translateY(5%);
  &:hover {
    opacity: ${({ liked }) => (liked ? '100%' : '30%')};
    color: #f34c90;
  }

  .fa-circle {
    color: white;
  }

  &:hover .fa-circle {
    color: #f5e4eb;
  }

  &:hover .fa-heart {
    color: #f34c90;
  }
`;

const StyledSmall = styled.small`
  transform: translateY(3%);
  font-size: 1.2rem;
  margin-left: 7px;
  user-select: none;
`;

const Like = ({ answerData, updateAnswer }) => {
  const userId = useContext(UserContext);
  const isLiked = useCallback(
    () => answerData.likes && answerData.likes.some((user) => user === userId),
    [answerData, userId]
  );

  const [liked, setLiked] = useState(isLiked());
  const [numOfLikes, setNumOfLikes] = useState(
    answerData.likes ? answerData.likes.length : 0
  );

  useEffect(() => {
    setLiked(isLiked());
    setNumOfLikes(answerData.likes ? answerData.likes.length : 0);
  }, [answerData, isLiked]);

  const handleClick = () => {
    const newAnswerData = JSON.parse(JSON.stringify(answerData));
    if (!liked) {
      // liked refers to previous state, and is therefor reversed
      // if liked
      if (answerData.likes) {
        newAnswerData.likes.push(userId);
      } else {
        newAnswerData.likes = [userId];
      }
    } else {
      // if not liked
      if (
        answerData.likes &&
        answerData.likes.some((user) => user === userId)
      ) {
        newAnswerData.likes.splice(answerData.likes.indexOf(userId), 1);
      }
    }
    updateAnswer(answerData._id, newAnswerData);
    setLiked(!liked);
  };

  return (
    <StyledContainer liked={liked} onClick={handleClick}>
      <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon={faCircle} transform={'grow-12'} id="test" />
        {liked ? (
          <FontAwesomeIcon icon={faHeart} />
        ) : (
          <FontAwesomeIcon icon={farHeart} />
        )}
      </span>
      {(answerData.likes && answerData.likes.length) > 0 && (
        <StyledSmall>{numOfLikes}</StyledSmall>
      )}
    </StyledContainer>
  );
};

export default Like;
