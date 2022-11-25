import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import Question from './components/Question/Question';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import AnswerBoard from './components/AnswerBoard/AnswerBoard';
import { theme } from './styles/theme';
import styled from 'styled-components';
import { UserProvider } from './UserContext';
import device from './constants/breakpoints';

const questionText = 'Hvordan synes du fremtidens sentrum bør være?';

const StyledMain = styled.main`
  margin: 1rem;
  max-width: 1020px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  position: relative;

  @media only screen and ${device.sm} {
    padding: 5rem 1rem 2rem;
  }
`;

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showWhatsThisModal, setShowWhatsThisModal] = useState(false);

  return (
    <UserProvider>
      <ThemeProvider theme={theme.munch}>
        <GlobalStyle />
        <Layout
          showLoginModal={showLoginModal}
          setShowLoginModal={setShowLoginModal}
          showWhatsThisModal={showWhatsThisModal}
          setShowWhatsThisModal={setShowWhatsThisModal}
        >
          <StyledMain>
            <Question text={questionText} />
            <AnswerBoard />
          </StyledMain>
        </Layout>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
