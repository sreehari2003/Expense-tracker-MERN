import { createContext, useReducer } from "react";


const AppReducer = (states,action)=>{
    switch(action.type){
      case "DELETE_TRANSACTION" :
        return {
          ...states,
          transactions:states.transactions.filter(el=>el.id !== action.val)
        }
        case "ADD_TRANSACTION":
          return {
            ...states,
            transactions:[{...action.val},...states.transactions]
          }
        default :
        return states;
    }
}

//initial state
const initialState = {
  transactions: [
    // { id: 1, text: "Flower", amount: -20 },
    // { id: 2, text: "Salary", amount: 300 },
    // { id: 3, text: "Book", amount: -10 },
    // { id: 4, text: "Camera", amount: 150 },
  ],
};
//create context
const GlobalContext = createContext(initialState);
export default GlobalContext
//provider context
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //actions
  const deleteTransaction =(id)=>{
    dispatch({
      type:"DELETE_TRANSACTION",
      val:id
    });
  }
  const addTransaction = (val)=>{
    dispatch({
      type:"ADD_TRANSACTION",
      val:val
    })
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
