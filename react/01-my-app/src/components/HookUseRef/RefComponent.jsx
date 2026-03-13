import React, {useRef} from 'react';

function RefComponent(props) {
    const inputRef = useRef(null);

    function focusInput() {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <div>
            <input ref={inputRef} type="text"/>
            <button onClick={focusInput}>Фокус на поле ввода</button>
        </div>
    );
}

export default RefComponent;