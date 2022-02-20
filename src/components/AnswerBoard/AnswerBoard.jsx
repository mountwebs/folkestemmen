import React, { useState, useEffect, useCallback, useContext } from 'react';
import styled from 'styled-components';
import device from '../../constants/breakpoints';
import Input from '../Input/Input';
import Answer from './Answer';
import Masonry from 'react-masonry-css';
import axios from 'axios';
import Button from '../Button/Button';
import UserContext from '../../UserContext';
import ThanksModal from '../ThanksModal/ThanksModal';

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
  font-weight: 400;
  text-align: center;
  margin-bottom: 0.5rem;
  @media only screen and ${device.sm} {
    font-size: 1rem;
  }
`;

const StyledSortButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const StyledButton = styled(Button)`
  padding: 20px 40px;
  border-radius: 25px;
  font-weight: 600;
  background-color: ${(props) => (props.selected ? '#C3E679' : '#EBE6CE')};
  color: ${({ theme, selected }) => (selected ? '#302405' : '#ACA79B')};

  &:last-child {
    margin-left: 10px;
  }

  @media only screen and ${device.sm} {
    padding: 12px 40px;
    font-size: 1rem;
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

const StyledLoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 4rem;
`;

const StyledLoadMoreButton = styled(Button)`
  padding: 20px 40px;
  border-radius: 25px;
  font-weight: 600;
  background-color: #c3e679;
  color: ${({ theme }) => theme.colors.button.text.secondary};

  @media only screen and ${device.sm} {
    padding: 12px 40px;
    font-size: 1rem;
  }
`;

const ANSWERS_LIMIT = 25;

const baseUrl = 'https://mighty-bayou-51480.herokuapp.com/';
// const baseUrl = 'http://localhost:4000/';

const AnswerBoard = () => {
  const [answerList, setAnswerList] = useState('');
  const [loading, setLoadingState] = useState(true);
  const [error, setErrorState] = useState(false);
  const [sortType, setSortType] = useState('new');
  const [morePosts, setMorePosts] = useState(true);
  const [loadPosts, setLoadPosts] = useState(ANSWERS_LIMIT);
  const userData = useContext(UserContext);
  const [showThanksModal, setShowThanksModal] = useState(false);

  const userId = userData.userId;
  const jwtKey = localStorage.getItem('jwtKey');

  let headerConfig = {
    headers: {
      userId,
    },
  };

  if (jwtKey) headerConfig.headers.token = `Bearer ${jwtKey}`;

  const handleLoadMore = () => {
    getMoreAnswers();
  };

  const getAnswers = useCallback(() => {
    axios
      .get(`${baseUrl}answer?sort=${sortType}&limit=${loadPosts}`)
      .then((response) => response.data)
      .then((data) => {
        setAnswerList(data);
        setLoadingState(false);
        if (data.length < ANSWERS_LIMIT) {
          setLoadPosts(data.length);
          setMorePosts(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorState(true);
      });
  }, [sortType, loadPosts]);

  const getMoreAnswers = () => {
    axios
      .get(`${baseUrl}answer?sort=${sortType}&skip=${answerList.length}`)
      .then((response) => response.data)
      .then((data) => {
        setAnswerList([...answerList, ...data]);
        setLoadPosts(loadPosts + data.length);
        data.length < ANSWERS_LIMIT && setMorePosts(false);
      })
      .catch((error) => {
        console.log(error);
        setErrorState(true);
      });
  };

  const addAnswer = (answer) => {
    axios
      .post(`${baseUrl}answer`, answer)
      .then((response) =>
        userData.setPosts([...userData.posts, response.data._id])
      )
      .then(getAnswers)
      .catch((error) => console.log(error));
  };

  const deleteAnswer = (answerId) => {
    axios
      .delete(`${baseUrl}answer/${answerId}`, headerConfig)
      .then(getAnswers)
      .catch((error) => console.log(error));
  };

  const updateAnswer = (answerId, newAnswer) => {
    axios
      .patch(`${baseUrl}answer/${answerId}`, newAnswer, headerConfig)
      .then((response) => response.data)
      .then(getAnswers)
      .catch((error) => console.log(error));
  };

  const updateLike = (answerId) => {
    const axiosPromise = axios
      .patch(`${baseUrl}like/${answerId}`, {}, headerConfig)
      .then((response) => response.data)
      .then((data) => {
        getAnswers();
        return data;
      })
      .catch((error) => console.log(error));

    return axiosPromise;
  };

  useEffect(() => {
    getAnswers();
  }, [getAnswers]);

  return (
    <StyledContainer className="answer-board">
      {showThanksModal && (
        <ThanksModal
          setShowThanksModal={setShowThanksModal}
          addAnswer={addAnswer}
        ></ThanksModal>
      )}
      <Input
        placeholderText={placeholderText}
        buttonText={buttonText}
        setShowThanksModal={setShowThanksModal}
      />
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
          ? 'Beklager! En feil har oppstått :('
          : loading
          ? 'Laster inn innspill..'
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
                  updateLike={updateLike}
                  deleteAnswer={deleteAnswer}
                  updateAnswer={updateAnswer}
                />
              );
            })}
      </StyledMasonry>
      {!error && !loading && (
        <StyledLoadMoreContainer>
          {morePosts ? (
            <StyledLoadMoreButton onClick={handleLoadMore}>
              Last flere inspill
            </StyledLoadMoreButton>
          ) : (
            'Ingen flere innspill..'
          )}
        </StyledLoadMoreContainer>
      )}
    </StyledContainer>
  );
};

export default AnswerBoard;
