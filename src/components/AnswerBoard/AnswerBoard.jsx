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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import FilterSection from './FilterSection';
import QueryParameterContext from '../../queryParameterProvider';

const StyledContainer = styled.div`
  margin-bottom: 5rem;
  border-radius: 10px;
  width: 100%;
  margin-top: 2rem;

  @media only screen and ${device.sm} {
    margin-top: 2.5rem;
  }
`;

const StyledFilterContainer = styled.div``;

const StyledFilterButton = styled.button``;

const StyledSortButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  @media only screen and ${device.sm} {
    margin-bottom: 3rem;
  }
`;

const StyledButton = styled(Button)`
  padding: 18px 35px;
  border-radius: 25px;
  font-weight: 600;
  background-color: ${({ theme, selected }) =>
    selected
      ? theme.colors.buttons.sort.selected.background
      : theme.colors.buttons.sort.deselected.background};
  color: ${({ theme, selected }) =>
    selected
      ? theme.colors.buttons.sort.selected.text
      : theme.colors.buttons.sort.deselected.text};

  span {
    margin-left: 0.5rem;
  }

  &:hover {
    filter: brightness(90%);
  }

  &:last-child {
    margin-left: 10px;
  }

  @media only screen and ${device.sm} {
    padding: 18px 40px;
    font-size: 1.2rem;
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
  margin-bottom: 3rem;
`;

const StyledLoadMoreButton = styled(Button)`
  padding: 20px 40px;
  border-radius: 25px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.button.background.primary};
  color: ${({ theme }) => theme.colors.button.text.primary};

  @media only screen and ${device.sm} {
    padding: 12px 40px;
    font-size: 1rem;
  }
`;

const ANSWERS_LIMIT = 25;

const baseUrl = process.env.REACT_APP_BASE_API_URL;

const options = [
  'Gaterommet St. Olavs plass',
  'Nordlig utgang av Korsatunellen',
  'Sørlig inngang til Korsatunellen',
  'Korsatunellen',
  'Harald Torsviks plass',
];

const qpOptions = {
  sted1: 'Gaterommet St. Olavs plass',
  sted2: 'Nordlig utgang av Korsatunellen',
  sted4: 'Sørlig inngang til Korsatunellen',
  sted3: 'Korsatunellen',
  sted5: 'Harald Torsviks plass',
};

const AnswerBoard = () => {
  const [answerList, setAnswerList] = useState('');
  const [loading, setLoadingState] = useState(true);
  const [error, setErrorState] = useState(false);
  const [sortType, setSortType] = useState('new');
  const [morePosts, setMorePosts] = useState(true);
  const [loadPosts, setLoadPosts] = useState(ANSWERS_LIMIT);
  const userData = useContext(UserContext);
  const [showThanksModal, setShowThanksModal] = useState(false);
  const [selectFilter, setSelectFilter] = useState('Alle innspill');

  const qpData = useContext(QueryParameterContext);

  const placeholderText = qpData.english
    ? 'What is your feedback?'
    : 'Hva er ditt innspill?';
  const buttonText = qpData.english ? 'Add' : 'Legg ut';

  useEffect(() => {
    if (qpData.tag && qpData.tag in qpOptions) {
      setSelectFilter(qpOptions[qpData.tag]);
    }
  }, [qpData]);

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
      .get(
        `${baseUrl}answer?sort=${sortType}&limit=${loadPosts}${
          selectFilter !== 'Alle innspill'
            ? `&tag=${encodeURIComponent(selectFilter)}`
            : ''
        }`
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(
          `${baseUrl}answer?sort=${sortType}&limit=${loadPosts}${
            selectFilter !== 'Alle innspill'
              ? `&tag=${encodeURIComponent(selectFilter)}`
              : ''
          }`
        );
        setAnswerList(data);
        setLoadingState(false);
        if (data.length < ANSWERS_LIMIT) {
          // setLoadPosts(data.length);
          setMorePosts(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorState(true);
      });
  }, [sortType, loadPosts, selectFilter]);

  const getMoreAnswers = () => {
    axios
      .get(
        `${baseUrl}answer?sort=${sortType}&skip=${answerList.length}${
          selectFilter !== 'Alle innspill'
            ? `&tag=${encodeURIComponent(selectFilter)}`
            : ''
        }`
      )
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
      .then((response) => {
        setLoadPosts(loadPosts + 1);
        return userData.setPosts([...userData.posts, response.data._id]);
      })
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
        options={['Velg byrom', ...options]}
      />
      <FilterSection
        options={options}
        selectFilter={selectFilter}
        setSelectFilter={setSelectFilter}
      />
      <StyledSortButtonsContainer>
        <StyledButton
          selected={sortType === 'new'}
          onClick={() => setSortType('new')}
        >
          {qpData.english ? 'Newest' : 'Nyeste'}
        </StyledButton>
        <StyledButton
          selected={sortType === 'likes'}
          onClick={() => setSortType('likes')}
        >
          <FontAwesomeIcon icon={faHeart} size={'lg'} />
          <span>{qpData.english ? 'Popular' : 'Populære'}</span>
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
              {qpData.english ? 'Load more' : 'Last flere innspill'}
            </StyledLoadMoreButton>
          ) : qpData.english ? (
            'No more posts...'
          ) : (
            'Ingen flere innspill...'
          )}
        </StyledLoadMoreContainer>
      )}
    </StyledContainer>
  );
};

export default AnswerBoard;
