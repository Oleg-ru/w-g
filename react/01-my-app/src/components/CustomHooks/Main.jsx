import React from 'react';
import {useCounter} from "./useCounter.js";

function Main(props) {

    const [count, increment, decrement, reset] = useCounter(0);
    
    return (
        <div>
            <h1>Счетчик: {count}</h1>
            <button onClick={increment}>Плюс</button>
            <button onClick={decrement}>Минус</button>
            <button onClick={reset}>Сбросить</button>
        </div>
    );
}

export default Main;