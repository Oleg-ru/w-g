'use client'

import React, {use} from 'react';
import Link from "next/link";

function NewsArticle({params, searchParams}: {
    params: Promise<{ articleId: string }>;
    searchParams: Promise<{
        language?: 'ru' | 'en' | 'fr' | 'de' | undefined;
        edit?: string
    }>;

}) {

    const {articleId} = use(params);
    const {edit, language = "ru"} = use(searchParams);

    return (
        <div>
            <h1>Новости: {articleId}</h1>
            <p>Язык: {language}</p>
            <div className="flex w-1/2 justify-between bg-amber-950 rounded mt-1 p-3">
                <Link className="hover:bg-blue-700" href={`${articleId}?language=ru&edit=true`}>Читать по-русски
                    (открыть модалку)</Link>
                <Link className="hover:bg-blue-700" href={`${articleId}?language=en`}>Read in English</Link>
                <Link className="hover:bg-blue-700" href={`${articleId}?language=fr`}>Lire en Francais</Link>
                <Link className="hover:bg-blue-700" href={`${articleId}?language=de`}>Auf deutsch lesen</Link>
            </div>
            {edit && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-gray-700 p-6 rounded-lg max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">Редактирование</h2>
                        <p>Форма редактирования статьи {articleId}</p>
                        <div className="mt-4 flex justify-end">
                            <Link className="px-4 py-2 bg-gray-500 rounded" href={`/articles/${articleId}?language=${language}`}>Закрыть</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NewsArticle;