import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';

// import { render } from '@testing-library/react';

const App = () => {
  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SigninPage />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
