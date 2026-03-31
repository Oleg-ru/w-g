'use client'

import Button from "@/components/Button";
import Link from "next/link";
import React, {useEffect, useState} from "react";

function Page() {
    console.log('Мы создаем серверный компонент')

    const [lastUpdated, setLastUpdated] = useState('')

    useEffect(() => {
        setLastUpdated(new Date().toISOString())
    }, []);
    //const lastUpdated = new Date().toISOString();

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">О нашей берлоге</h1>
            <p className="mt-4 ">Эта страница полностью отображается на сервере. Для этого компонента JS не отправляется в браузер</p>
            <div>
                <p>Последнее обновление: {lastUpdated}</p>
                <Button />
            </div>
            <Link className="text-fuchsia-500" href="/">На главную</Link>
        </div>
    );
}

export default Page;