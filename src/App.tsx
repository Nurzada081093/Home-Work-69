import Layout from './Components/Layout/Layout.tsx';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AutoCompleteComponent from './Components/AutoCompleteComponent/AutoCompleteComponent.tsx';

const App = () => {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<AutoCompleteComponent/>}></Route>
          <Route path="/shows/:id" element={<AutoCompleteComponent/>}></Route>
          <Route path="*" element={<h1>Not found</h1>}/>
        </Routes>
      </Layout>
    </>
  );
};

export default App;

// то есть я должна была автокомплит сделать компонетом и все функции и параметры передать пропсами. Далее создать еще один компонент который выводит данные уже по определенный сериал и в этом же компоненте прописываю всю логику так же вызываю компонент  "автокомплит". Верно?