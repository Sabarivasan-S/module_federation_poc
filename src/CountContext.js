import {useContext, createContext, useState} from 'react';
const CountContext = createContext();
export const useCount = () => useContext(CountContext);

const CountContextProvider = ({children}) => {
  const [count, setCount] = useState(2);
  return (
    <CountContext.Provider value={{count, setCount}}>
      {children}
    </CountContext.Provider>
  );
}
export default CountContextProvider;