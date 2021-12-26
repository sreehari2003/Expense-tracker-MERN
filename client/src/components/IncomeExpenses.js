import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalState'
// import "./styles.css";

export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  const income = transactions.map(el=>el.amount).filter(el=>el > 0).reduce((val,def)=>{
   return val + def;
  },0)
  const expense = transactions.map(el=>el.amount).filter(el=>el < 0).reduce((val,def)=>{
    return val + def;
   },0)

  
    return (
        <>
          <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">${Math.abs(expense)}</p>
        </div>
      </div>   
        </>
    )
}
