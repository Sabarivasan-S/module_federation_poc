import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { counter } from './store/reducers/counter';
const TestRedux = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Test Redux Component</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: 'counter/INCREMENT' })}>Increment</button>
    </div>
  );
};

const TestReduxComponent = (props) => {
  const { store } = props;
  useEffect(() => {
    store.injectReducer('counter', counter);
  }, []);

  return <TestRedux {...props} />;
};
export default TestReduxComponent;
