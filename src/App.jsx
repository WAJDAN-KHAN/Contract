import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './components/Home/Main';
import { Footer } from './components/Home/Footer';
import { Token } from './components/Token/Token';
import ItemsContainer from './components/Details/ItemsContainer';
import { MainPage } from './components/MainPage/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<Main />} />
        <Route path="/token" element={<Token />} />
        <Route path="/details" element={<ItemsContainer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
