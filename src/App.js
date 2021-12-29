import React, { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Question from './components/Question/Question';
import Welcome from './components/Welcome/Welcome';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import AnswerBoard from './components/AnswerBoard/AnswerBoard';
import { theme } from './styles/theme';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import UserContext from './UserContext'

const questionText = 'Hvordan synes du fremtidens sentrum bør være?';

const StyledMain = styled.main`
  margin: 1rem;
  max-width: 1020px;
  margin-left: auto;
  margin-right: auto;
`;


function App() {
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("userId");
    if (saved) {
      setUserId(JSON.parse(saved))
    } else {
      const newUserId = uuidv4();
      localStorage.setItem("userId", JSON.stringify(newUserId));
      setUserId(newUserId);
    }
  }, [])


  return (
    <UserContext.Provider value={userId}>
      <ThemeProvider theme={theme.light}>
        <GlobalStyle />
        <Layout showModal={showModal} setShowModal={setShowModal}>
          <Welcome showModal={showModal} setShowModal={setShowModal} />
          <StyledMain>
            <Question text={questionText} />
            <AnswerBoard />
          </StyledMain>
        </Layout>
      </ThemeProvider>
      </UserContext.Provider>
  );
}

export default App;
