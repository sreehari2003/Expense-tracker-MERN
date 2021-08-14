import React from "react";
import GlobalContext from "../context/GlobalState";
import { useContext } from "react";


export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const balance = transactions.map(el=>el.amount).reduce((val,def)=>{
    return val + def
  },0)
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">${balance}</h1>
    </div>
  );
}
