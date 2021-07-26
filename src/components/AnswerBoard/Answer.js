import React from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import Tag from './Tag';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.3rem;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.body.primary};
  border-radius: 20px;

  @media only screen and ${device.sm} {
    // -- alternative to make columns more 'masonry' --
    margin-bottom: 35px;
    break-inside: avoid;
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

    &-user {
      display: flex;
      align-items: center;

      p {
        margin-left: 0.4rem;
        color: ${({ theme }) => theme.colors.text.muted};
        font-size: 1rem;
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

const Answer = ({ cardText, tags, userName }) => {
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
        <div>
          {tags.map((tagData) => (
            <Tag key={tagData._id} tagData={tagData}>
              {tagData.name}
            </Tag>
          ))}
        </div>
      </div>
    </StyledCard>
  );
};

export default Answer;
