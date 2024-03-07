import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './component/Home'
import Wallet from './component/Wallet';
import Transactions from './component/Transactions';
import Income from './component/Income';
import Expenses from './component/Expenses';
import ManageBudget from './component/ManageBudget';
import PaymentPages from './component/PaymentPages';
import BillsUtilities from './component/BillsUtilities';
import Insights from './component/Insights';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/wallets" exact Component={Wallet} />
          <Route path="/transactions" exact Component={Transactions} />
          <Route path="/income" exact Component={Income} />
          <Route path="/expenses" exact Component={Expenses} />
          <Route path="/managebudget" exact Component={ManageBudget} />
          <Route path="/paymentpages" exact Component={PaymentPages} />
          <Route path="/Bills" exact Component={BillsUtilities} />
          <Route path="/insights" exact Component={Insights} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
