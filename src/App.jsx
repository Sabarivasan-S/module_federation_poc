import React from 'react';
import TestReducerComponent from './testReducerComponent';
import CountContextProvider from './CountContext';
import CountReducerProvider from './CountReducer';
import TestContextComponent from './testContextComponent';

const App=()=> {
  return (
    <>
      <CountContextProvider>
        <TestContextComponent/>
      </CountContextProvider>
      <CountReducerProvider>
        <TestReducerComponent/>
      </CountReducerProvider>
    </>
  )
}

export default App;