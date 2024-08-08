import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './components/Home/Main';
import { Token } from './components/Token/Token';
import ItemsContainer from './components/Details/ItemsContainer';
import { MainPage } from './components/MainPage/MainPage';
import Footer1 from './components/MainPage/Footer1';
import { Header } from './components/Home/Header';
import { PendingTransaction } from './components/Pending-transaction';
import { Transaction } from './components/Transaction';
import { ContractTransaction } from './components/Contract-transaction';
import { Blocks } from './components/Blocks';

function App() {
  return (
    <Router>
      <div>
        <div className="">
          <Header />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<Main />} />
        {/* <Route path="/token" element={<Token />} />
        <Route path="/details" element={<ItemsContainer />} />
        <Route path="/transaction" element={<TransactionMain />} /> */}
        <Route path="/pending-transaction" element={<PendingTransaction />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/contact-transaction" element={<ContractTransaction />} />
        <Route path="/blocks" element={<Blocks />} />
      </Routes>
      <Footer1 />
    </Router>
  );
}

export default App;
