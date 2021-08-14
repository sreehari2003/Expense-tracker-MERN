import React from 'react'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalState'

export default function Transacrion(props) {
  const {deleteTransaction} = useContext(GlobalContext)
  const deleteMoney =()=>deleteTransaction(props.id)
    return (
        <li className={props.amount < 0 ? "minus" : "plus"}>
          {props.val} <span>${props.amount}</span>
          <button onClick={deleteMoney} className="delete-btn">x</button>
        </li>
    )
}
