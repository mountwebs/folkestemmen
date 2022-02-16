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
  font-size: 1.4rem;
  &:hover {
    opacity: ${({ liked }) => (liked ? '100%' : '30%')};
    color: #f34c90;
    cursor: pointer;
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
  transform: translateY(6%);
  font-size: 1.1rem;
  margin-left: 6px;
  user-select: none;
`;

const Like = ({ answerData, updateLike }) => {
  const userData = useContext(UserContext);
  const [liked, setLiked] = useState(() =>
    userData.likes.includes(answerData._id)
  );
  const [numOfLikes, setNumOfLikes] = useState(() =>
    answerData.numOfLikes ? answerData.numOfLikes : 0
  );

  useEffect(() => {
    setNumOfLikes(answerData.numOfLikes);
    setLiked(() => userData.likes.includes(answerData._id));
  }, [answerData, userData.likes]);

  const handleClick = async () => {
    // liked refers to previous state, and is therefor reversed
    if (!liked) {
      userData.setLikes([...userData.likes, answerData._id]);
    } else {
      const newLikes = [...userData.likes];
      userData.setLikes(
        newLikes.filter((answerId) => answerData._id !== answerId)
      );
    }

    await updateLike(answerData._id);
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
      {numOfLikes > 0 && <StyledSmall>{numOfLikes}</StyledSmall>}
    </StyledContainer>
  );
};

export default Like;
