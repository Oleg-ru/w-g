import React, {useRef} from 'react';

function UncontrolledForm(props) {

    const input = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        const value = input.current.value;
        console.log(`Значение: ${value}`);
        input.current.value = "";
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={input}/>
            <button type="submit">Отправить</button>
        </form>
    );
}

export default UncontrolledForm;