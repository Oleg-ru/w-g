'use client'

import {useState} from "react";

function Button() {

    const [name, setName] = useState()

    return (
        <button className="bg-amber-600 hover:bg-amber-200 hover:text-amber-900 p-2 rounded-2xl"
                onClick={() => {alert('Нажали')}}
        >Нажми меня бро</button>
    );
}

export default Button;