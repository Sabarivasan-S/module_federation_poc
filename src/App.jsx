import React from 'react';
import TestReduxComponent from './testReduxComponent';
import store from './store';

const App = ({store:externalStore}) => {
  let storeToUse;
  if(externalStore) storeToUse=externalStore;
  else storeToUse=store;
  return (
    <>
      <TestReduxComponent store={storeToUse}/>
    </>
  );
};

export default App;
