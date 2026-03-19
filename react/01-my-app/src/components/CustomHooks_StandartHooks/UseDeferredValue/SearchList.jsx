import React, {memo} from 'react';

const SearchList = memo(({query}) => {
    console.log('Рендер SearchList', query);

    let items = []
    for (let i = 0; i < 50; i++) {
        items.push(<SearchItem key={i} query={query}/>)
    }
    return (
        <ul>
            {items}
        </ul>
    );
})

export function SearchItem({query}) {
    let startTime = performance.now();
    while (performance.now() - startTime < 10) {
        //10ms выполняться будет
    }
    console.log('Рендерениг SearchItem');
    return <li>
        Введено: {query}
    </li>
}

export default SearchList;