import { createContext, useState, useReducer } from "react";
import axios from "axios";

const AppReducer = (states, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...states,
        loading: false,
        transactions: action.val,
      };
    case "TRANSACTION_ERROR":
      return {
        ...states,
        error: action.val,
      };
    case "DELETE_TRANSACTION":
      return {
        ...states,
        transactions: states.transactions.filter((el) => el.id !== action.val),
      };
    case "ADD_TRANSACTION":
      return {
        ...states,
        transactions: [...states.transactions, { ...action.val }],
      };
    default:
      return states;
  }
};

//initial state
const initialState = {
  transactions: [
    // { id: 1, text: "Flower", amount: -20 },
  ],
  loading: true,
  error: null,
};
//create context
const GlobalContext = createContext(initialState);
export default GlobalContext;
//provider context
export const GlobalProvider = ({ children }) => {
  const [load, setLoad] = useState(false);

  const [state, dispatch] = useReducer(AppReducer, initialState);
  //actions
  const onClick = () => setLoad(!load);

  async function getTransaction() {
    try {
      const res = await axios.get("api/v1/transactions/");
      dispatch({
        type: "GET_TRANSACTIONS",
        val: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        val: err.response.data.error,
      });
    }
  }

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`api/v1/transactions/${id}`);
      dispatch({
        type: "DELETE_TRANSACTION",
        val: id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        val: id,
      });
    }
  };
  const addTransaction = async (val) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("api/v1/transactions", val, config);
      dispatch({
        type: "ADD_TRANSACTION",
        val: res.data.data,
      });
    } catch (err) {
      console.log(err);
    }

    dispatch({
      type: "ADD_TRANSACTION",
      val: val,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        getTransaction,
        onClick,
        load,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
