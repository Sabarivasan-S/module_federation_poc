import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { multiply } from "./store/reducers/multiply";

const TestRedux2 = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.multiply);
    return (
        <div>
            <h1>Test Redux Component</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch({type:'m/twice'})}>Twice</button>
        </div>
    );
}

const TestReduxComponent2 = props => {
    const { store } = props;
    useEffect(() => {
      store.injectReducer('multiply', multiply);
    }, []);
  
    return (
      <Provider store={store || {}}>
        <TestRedux2 />
      </Provider>
    );
  };
export default TestReduxComponent2;