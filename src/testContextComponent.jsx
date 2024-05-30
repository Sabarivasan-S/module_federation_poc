import React from "react";
import { useCount } from "./CountContext";

const TestContextComponent = ({setCount2}) => {
    const {count, setCount}=useCount();
    console.log("TestContextComponent", setCount2);
    if(setCount2)setCount2(count);
    return (
        <div>
            <h1>Test Context Component</h1>
            <h2>Count: {count}</h2>
            <button onClick={()=>{
                if(setCount2)setCount2(count+2);
                setCount(count+2);
                }}>Add 2</button>
        </div>
    );
}
export default TestContextComponent;