import React, {useReducer, useState} from 'react';
import {counterReducer, initialState} from "./reducers/counterReducer.js";

function Counter(props) {

    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [inputValue, setInputValue] = useState('')

    function handleSetValue(e) {
        e.preventDefault();
        const num = parseInt(inputValue);
        if (!isNaN(num)) {
            // Забрасываем число как состояние
            dispatch({type: "SET_VALUE", payload: num})
        }
        setInputValue('');
    }

    function handleDecrement() {
        const num = parseInt(inputValue);
        dispatch({type: 'DECREMENT'});
    }

    function handleIncrement() {
        const num = parseInt(inputValue);
        dispatch({type: 'INCREMENT'});
    }

    function handleReset() {
        const num = parseInt(inputValue);
        dispatch({type: 'RESET'});
    }
    
    return (
        <div>
            <h2>Счетчик: {state.count}</h2>
            <div>
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleIncrement}>+</button>
            </div>
            <button onClick={handleReset}>Сбросить</button>
            <form onSubmit={handleSetValue}>
                <input type="number"
                       placeholder="Установить значение"
                       onChange={(event) => {setInputValue(event.target.value)}}
                        value={inputValue}
                />
                <button type="submit">Применить</button>
            </form>
        </div>
    );
}

export default Counter;