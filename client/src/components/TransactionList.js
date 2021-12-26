import React, { useContext } from "react";
import GlobalContext from "../context/GlobalState";
import Transacrion from "./transacrion";

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((el) => (
          <Transacrion
            val={el.text}
            amount={el.amount}
            id={el._id}
          ></Transacrion>
        ))}
      </ul>
    </>
  );
}
