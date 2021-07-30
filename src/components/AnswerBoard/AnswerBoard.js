import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import Input from '../Input/Input';
import Answer from './Answer';
import Masonry from 'react-masonry-css';
import axios from 'axios';
// import './AnswerBoard.css';

const placeholderText = 'Fortell oss hva du vil si her';
const buttonText = 'Legg ut';

const StyledContainer = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.body.secondary};
  margin-bottom: 5rem;
  border-radius: 10px;
  max-width: 1020px;

  @media only screen and ${device.sm} {
    padding-top: 66px;
    padding-left: 66px;
    padding-right: 66px;
  }
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

// const baseUrl = 'https://mighty-bayou-51480.herokuapp.com/';
const baseUrl = 'http://localhost:4000/';

const AnswerBoard = () => {
  const [answerList, setAnswerList] = useState('');
  const [loading, setLoadingState] = useState(true);
  const [error, setErrorState] = useState(false);
  const [tagList, setTagList] = useState([]);

  const addAnswer = (answer) => {
    axios
      .post(`${baseUrl}answer`, answer)
      .then((response) => response.data)
      .then((data) => console.log(data))
      .then(getAnswers)
      .catch((error) => console.log(error));
  };

  const getAnswers = () => {
    axios
      .get(`${baseUrl}answer`)
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

  const getTagList = () => {
    axios
      .get(`${baseUrl}tag`)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setTagList(data);
      })
      .catch((error) => {
        console.log(error);
        setErrorState(true);
      });
  };

  useEffect(() => {
    getAnswers();
    getTagList();
  }, []);

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
          tagList={tagList}
        />
      )}

      <StyledMasonry
        breakpointCols={{ default: 2, 768: 1 }}
        columnClassName="my-masonry-grid_column"
      >
        {error
          ? 'Error'
          : loading
          ? 'Loading'
          : answerList.map((answer, index) => {
              const { text, tags, name } = answer;
              return (
                <Answer
                  cardText={text}
                  tags={tags}
                  userName={name}
                  key={index}
                />
              );
            })}
      </StyledMasonry>
    </StyledContainer>
  );
};

export default AnswerBoard;
