'use client'

import {useState} from "react";

function ClientComponentTwo() {
    const [isValidate, setIsValidate] = useState(false)
    return (
        <h1>
           Второй клиентский компонент
        </h1>
    );
}

export default ClientComponentTwo;