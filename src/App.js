import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import "./components/styles.css"
import TransactionList from './components/TransactionList'
import AddTrransaction from './components/AddTrransaction'
//context
import { GlobalProvider } from './context/GlobalState'

export default function App() {
  return (
  <GlobalProvider>
     <Header></Header>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTrransaction/>
      </div>
  </GlobalProvider>
  )
}

