import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Formik from './components/Formik/Formik';
import UserFetchDetails from './components/UserFetchDetails/UserFetchDetails';
// import UserItem from './components/UserItem/UserItem';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Formik/>} />
        {/* <Route path="table" element={<UserItem/>} /> */}
        <Route path="fetchedData" element={<UserFetchDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
