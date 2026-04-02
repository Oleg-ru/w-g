import React from 'react';

async function Docs({params} : {params: Promise<{slug: string[] }>}) {
    const {slug} = await params;

    if (!slug || slug.length === 0) {
        return <h1>Главная страница доки</h1>
    }

    if (slug.length === 1) {
        return <h1>Раздел {slug[0]}</h1>
    }

    if (slug.length === 2) {
        return <h1>Подраздел {slug[1]} в разделе {slug[0]}</h1>
    }

    if (slug.length === 3) {
        return <h1>Категория {slug[2]} в подразделе {slug[1]} в разделе {slug[0]}</h1>
    }

    return (
        <h2>
            Ваще глубоко бро ты попал :-) {slug.join(" > ")}
        </h2>
    );
}

export default Docs;