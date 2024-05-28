import React, { useReducer, useContext, createContext } from 'react';

const CountStateContext = createContext();
const CountDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'add':
      return { ...state, count: state.count + action.value };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const CountReducerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>{children}</CountDispatchContext.Provider>
    </CountStateContext.Provider>
  );
};
export default CountReducerProvider;
export const useCountState = () => useContext(CountStateContext);
export const useCountDispatch = () => useContext(CountDispatchContext);
