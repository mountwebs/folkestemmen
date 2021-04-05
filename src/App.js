import Layout from "./components/Layout/Layout";
import Welcome from "./components/Welcome/Welcome";
import React from "react";

function App() {
  return (
    <Layout>
      <Welcome />
      <main>Hvordan synes du fremtidens sentrum bør være?</main>
    </Layout>
  );
}

export default App;
