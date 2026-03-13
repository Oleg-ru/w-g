import React, {useRef} from 'react';
import './RefComponentEffect.css'

function RefComponentEffect(props) {
    const inputRef = useRef(null);

    function focusInput() {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <div className="input-container">
            <input
                ref={inputRef}
                type="text"
                placeholder=" "
                className="floating-input"
            />
            <label className="floating-label">Введите текст</label>
            <button onClick={focusInput}>Фокус на поле ввода</button>
        </div>
    );
}

export default RefComponentEffect;