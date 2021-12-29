import React, { useState, useContext, useEffect } from 'react';
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

const Like = ({ like, likes, answerData, updateAnswer }) => {
  const userId = useContext(UserContext);
  const [liked, setLiked] = useState(
    likes && likes.some((user) => user === userId)
  );

  useEffect(() => {
    setLiked(likes && likes.some((user) => user === userId));
  }, [likes, userId]);

  const handleClick = () => {
    if (!liked) {
      // if liked
      if (answerData.likes) {
        answerData.likes.push(userId);
      } else {
        answerData.likes = [userId];
      }
    } else {
      // if not liked
      // if answerData has likes and userId is in likes
      if (
        answerData.likes &&
        answerData.likes.some((user) => user === userId)
      ) {
        answerData.likes.splice(answerData.likes.indexOf(userId), 1);
      }
    }
    console.log(answerData);
    updateAnswer(answerData._id, answerData);
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
      <StyledSmall>{likes.length > 0 ? likes.length : ''}</StyledSmall>
    </StyledContainer>
  );
};

export default Like;
