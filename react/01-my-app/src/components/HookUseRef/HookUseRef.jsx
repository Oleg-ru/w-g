import React, {useState} from 'react';
import ChildComponent from "./ChildComponent.jsx";

function HookUseRef(props) {
    const [elementText, setElementText] = useState("");

    function handleClick() {
        const element = document.getElementById("my-element");
        setElementText(element.textContent);
    }
    return (
        <div>
            <div id="my-element">Это элемент с ID</div>
            <button onClick={handleClick}>Получить текст элемента</button>
            <p>Текст элемента: {elementText}</p>
            <hr/>
            <ChildComponent />
        </div>
    );
}

export default HookUseRef;