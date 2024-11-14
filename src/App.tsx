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
