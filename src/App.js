import React from "react";
import "./App.css";
import { AddTransaction } from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { GlobalProvider } from "./components/Context/GlobalState";
import { Header } from "./components/Header";
import { IncomeExpensive } from "./components/IncomeExpensive";
import { TransactionList } from "./components/TransactionList";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpensive />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
