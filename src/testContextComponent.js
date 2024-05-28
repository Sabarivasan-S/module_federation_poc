import React from "react";
import { useCount } from "./CountContext";

const TestContextComponent = () => {
    const {count, setCount}=useCount()
    return (
        <div>
            <h1>Test Context Component</h1>
            <h2>Count: {count}</h2>
            <button onClick={()=>setCount(count+2)}>Add 2</button>
        </div>
    );
}
export default TestContextComponent;