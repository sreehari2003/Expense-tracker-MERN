import React, { useState } from "react";
import { useContext } from "react";
import GlobalContext from "../context/GlobalState";

export default function AddTrransaction() {
  const { addTransaction, onClick } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };
  const onSubmits = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text: text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    onClick();
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmits}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={onChangeText}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={onChangeAmount}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
