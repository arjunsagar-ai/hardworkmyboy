import { useState } from 'react';
export const Counter = () => {
    const [ count , setCount ] = useState(0);

    const handleIncremennt = () =>{
        setCount( count +1);
    }
    const handleDecrement = () =>{
        setCount ( count -1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleIncremennt}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>  
        </div>
    );
};