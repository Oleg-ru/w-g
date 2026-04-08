'use client'
import {useEffect} from "react";

export default function ErrorPage({error}: {error: Error}) {
    useEffect(() => {
        console.error('Error: ', error)
    }, [error]);

    return (
        <div className="border rounded border-red-400 w-max p-3">
            <h2>🔴 Ошибка загрузки данных</h2>
        </div>
    )
}