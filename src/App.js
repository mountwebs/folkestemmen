import React from 'react';
import Layout from './components/Layout/Layout';
import Question from './components/Question/Question';
import Welcome from './components/Welcome/Welcome';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import AnswerBoard from './components/AnswerBoard/AnswerBoard';
import { theme } from './styles/theme';
import styled from 'styled-components';

const questionText = 'Hvordan synes du fremtidens sentrum bør være?';

const StyledMain = styled.main`
  margin: 1rem;
  max-width: 1020px;
  margin-left: auto;
  margin-right: auto;
`;

function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      <Layout>
        <Welcome />
        <StyledMain>
          <Question text={questionText} />
          <AnswerBoard />
        </StyledMain>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
