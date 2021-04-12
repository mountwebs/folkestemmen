import React from 'react';
import Layout from './components/Layout/Layout';
import Question from './components/Question/Question';
import Welcome from './components/Welcome/Welcome';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import AnswerBoard from './components/AnswerBoard/AnswerBoard';
import styles from './App.module.css';
import { theme } from './styles/theme';

const questionText = 'Hvordan synes du fremtidens sentrum bør være?';

function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      <Layout>
        <Welcome />
        <main className={styles.main}>
          <Question text={questionText} />
          <AnswerBoard />
        </main>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
