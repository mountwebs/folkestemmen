import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import Input from '../Input/Input';
import Answer from './Answer';
import Masonry from 'react-masonry-css';
import axios from 'axios';
import Button from '../Button/Button';
// import './AnswerBoard.css';

const placeholderText = 'Hva er ditt inspill?';
const buttonText = 'Legg ut';

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.body.background};
  margin-bottom: 5rem;
  border-radius: 10px;
  margin: 0 5px;
  max-width: 1020px;
  padding-top: 2rem;

  @media only screen and ${device.sm} {
    padding-top: 4rem;
  }
`;

const StyledHeading = styled.p`
  text-align: center;
  margin-bottom: 1.5rem;
  @media only screen and ${device.sm} {
    font-size: 1rem;
  }
`;

const StyledSortButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const StyledButton = styled(Button)`
  margin-left: 10px;
  background-color: ${(props) => (props.selected ? '#292929' : '#C3E679')};
  color: ${({ theme, selected }) => (selected ? 'white' : theme.colors.brown)};
`;

const StyledMasonry = styled(Masonry)`
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: -30px; /* gutter size offset */
  width: auto;

  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }
`;

const baseUrl = 'https://mighty-bayou-51480.herokuapp.com/';
// const baseUrl = 'http://localhost:4000/';

const AnswerBoard = () => {
  const [answerList, setAnswerList] = useState('');
  const [loading, setLoadingState] = useState(true);
  const [error, setErrorState] = useState(false);
  const [sortType, setSortType] = useState('new');

  const getAnswers = () => {
    axios
      .get(`${baseUrl}answer?sort=${sortType}`)
      .then((response) => response.data)
      .then((data) => {
        setAnswerList(data);
        setLoadingState(false);
      })
      .catch((error) => {
        console.log(error);
        setErrorState(true);
      });
  };

  const addAnswer = (answer) => {
    axios
      .post(`${baseUrl}answer`, answer)
      .then((response) => response.data)
      .then(getAnswers)
      .catch((error) => console.log(error));
  };

  const updateAnswer = (id, answer) => {
    axios
      .put(`${baseUrl}answer/${id}`, answer)
      .then((response) => response.data)
      .then(getAnswers)
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAnswers();
  }, [sortType]);

  return (
    <StyledContainer className="answer-board">
      {error ? (
        'Error'
      ) : loading ? (
        'Loading'
      ) : (
        <Input
          placeholderText={placeholderText}
          buttonText={buttonText}
          addAnswer={addAnswer}
        />
      )}
      <StyledHeading>Innspill</StyledHeading>
      <StyledSortButtonsContainer>
        <StyledButton
          selected={sortType === 'new'}
          onClick={() => setSortType('new')}
        >
          Nyeste
        </StyledButton>
        <StyledButton
          selected={sortType === 'likes'}
          onClick={() => setSortType('likes')}
        >
          Populære
        </StyledButton>
      </StyledSortButtonsContainer>
      <StyledMasonry
        breakpointCols={{ default: 2, 768: 1 }}
        columnClassName="my-masonry-grid_column"
      >
        {error
          ? 'Error'
          : loading
          ? 'Loading'
          : answerList.map((answer, index) => {
              const { text, tags, createdAt, likes } = answer;
              return (
                <Answer
                  cardText={text}
                  tags={tags}
                  createDate={createdAt}
                  key={index}
                  likes={likes}
                  answerData={answer}
                  updateAnswer={updateAnswer}
                />
              );
            })}
      </StyledMasonry>
    </StyledContainer>
  );
};

export default AnswerBoard;
