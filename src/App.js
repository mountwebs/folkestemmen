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
import Closed from './components/Closed/Closed';

const questionText = 'Hvordan synes du fremtidens sentrum bør være?';

const StyledMain = styled.main`
  margin: 0 1rem 1rem;
  max-width: 1020px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px 10px;
  position: relative;

  @media only screen and ${device.sm} {
    padding: 4rem 1rem 2rem;
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
            <Closed />
            <AnswerBoard />
          </StyledMain>
        </Layout>
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
