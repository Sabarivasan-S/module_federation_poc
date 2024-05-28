import React from "react";

import { useCountState, useCountDispatch } from "./CountReducer";

const TestReducerComponent = () => {
    const {count} = useCountState();
    const dispatch = useCountDispatch();
    
    return (
        <div>
            <h1>Test Reducer Component</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "add", value: 2 })}>Add 2</button>
        </div>
    );
};
export default TestReducerComponent;