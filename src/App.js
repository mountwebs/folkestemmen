import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import Question from './components/Question/Question';
import Welcome from './components/Welcome/Welcome';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import AnswerBoard from './components/AnswerBoard/AnswerBoard';
import { theme } from './styles/theme';
import styled from 'styled-components';
import { UserProvider } from './UserContext';
import device from './constants/breakpoints';
import { Helmet } from 'react-helmet';

const questionText = 'Hvordan synes du fremtidens sentrum bør være?';

const StyledMain = styled.main`
  margin: 1rem;
  max-width: 1020px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  @media only screen and ${device.sm} {
    padding: 0 10px;
  }
`;

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <UserProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
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
    </UserProvider>
  );
}

export default App;
