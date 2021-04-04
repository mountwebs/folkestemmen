import Layout from './components/Layout/Layout';
import Input from './components/Input/Input';

const placeholderText = 'Fortell oss hva du vil si her';
const buttonText = 'Legg ut';

function App() {
  return (
    <Layout>
      <main>Hvordan synes du fremtidens sentrum bør være?</main>
      <Input placeholderText={placeholderText} buttonText={buttonText} />
    </Layout>
  );
}

export default App;
