import React, {useRef} from 'react';
import Input from "./Input.jsx";

function HandleMain(props) {
    const inputRef = useRef(null);

    function handleFocus() {
        inputRef.current.focus()
    }

    function handleGetValue() {
        const value = inputRef.current.getValue();
        console.log(value)
    }

    return (
        <div>
            <Input ref={inputRef}/>
            <button onClick={handleFocus}>Фокус на input</button>
            <button onClick={handleGetValue}>Получить значение из Input</button>
        </div>
    );
}

export default HandleMain;