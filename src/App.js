import Layout from "./components/Layout/Layout";
import Question from "./components/Question/Question";
import AnswerBoard from "./components/AnswerBoard/AnswerBoard";
import Welcome from "./components/Welcome/Welcome";
import styles from "./App.module.css";

const questionText = "Hvordan synes du fremtidens sentrum bør være?";

function App() {
  return (
    <Layout>
      <Welcome />
      <main className={styles.main}>
        <Question text={questionText} />
        <AnswerBoard />
      </main>
    </Layout>
  );
}

export default App;
