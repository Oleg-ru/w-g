'use client'
import React, {useEffect, useState} from 'react';
import Link from "next/link";

function DashboardPage() {

    const [name, setName] = useState('');
    const [windowWith, setWindowWith] = useState(0);

    useEffect(() => {

        setWindowWith(window.innerWidth);
        const handleResize = () => setWindowWith(window.innerWidth);
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="p-8 text-cyan-900">
            <h1 className="text-2xl font-bold">Панель пользака</h1>
            <div className="mt-6 space-y-4">
                <div className="p-4 bg-emerald-100 rounded">
                    <label className="block md-2" htmlFor="">
                        Введите ваше имя:
                    </label>
                    <input className="p-2 border rounded"
                           value={name}
                           onChange={(event) => {setName(event.target.value)}}
                    />
                    <p className="mt-2">Привет, {name || 'Гость'}</p>
                </div>
                <div className="p-3 bg-cyan-100">
                    <p>Ширина окна: {windowWith}px</p>
                </div>
            </div>
            <Link className="text-fuchsia-500" href="/">На главную</Link>
        </div>
    );
}

export default DashboardPage;