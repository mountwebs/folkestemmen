import React from "react";
import Layout from "./components/Layout/Layout";
import Input from "./components/Input/Input";
import Question from "./components/Question/Question";
import Welcome from "./components/Welcome/Welcome";

const placeholderText = "Fortell oss hva du vil si her";
const buttonText = "Legg ut";
const questionText = "Hvordan synes du fremtidens sentrum bør være?";

function App() {
  return (
    <Layout>
      <Welcome />
      <main>
        <Question text={questionText} />
        <Input placeholderText={placeholderText} buttonText={buttonText} />
      </main>
    </Layout>
  );
}

export default App;
