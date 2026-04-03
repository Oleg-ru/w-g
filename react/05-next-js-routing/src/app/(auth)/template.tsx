'use client'

import {useState} from "react";

const navLinks = [
    {name: 'Вход', href: '/login'},
    {name: 'Регистрация', href: '/register'},
    {name: 'Восстановление', href: '/forgot'},
];

export default function AuthTemplate({children,}: { children: React.ReactNode; }) {

    const [input, setInput] = useState('')

    return (
        <div>
            <div>
                <input type="text"
                       value={input}
                       onChange={(e) => {
                           setInput(e.target.value)
                       }}
                       className={"border m-2 p-1"}
                />
            </div>
            <div className="flex-1 bg-gray-700">
                {children}
            </div>
        </div>
    );
}