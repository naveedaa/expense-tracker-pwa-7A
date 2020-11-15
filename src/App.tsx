import React from 'react';
import './App.css';
import { GlobalProvider } from './Context/GlobalState' 
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { AccountData } from './Components/AccountData';
import { TransactionData } from './Components/TransactionData'
import { AddTransaction } from './Components/AddTransaction';

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <AccountData />
        <TransactionData />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;