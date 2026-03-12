import React from 'react';

function MyName(props) {

    const cats = ['Кот', 'Ягуар', 'Рысь'];

    return (
        <>
            <div>Меня зовут Олег. И у меня есть:</div>
            <ul>
                {cats.map(cat => <li key={cat}>{cat}</li>)}
            </ul>
        </>
    );
}

export default MyName;