import React, {useState} from 'react';

function ControlledForm(props) {

    const [value, setValue] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`Значение: ${value}`);
        setValue("")
    }

    function handleChange(e) {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange}/>
            <button type="submit">Отправить</button>
        </form>
    );
}

export default ControlledForm;