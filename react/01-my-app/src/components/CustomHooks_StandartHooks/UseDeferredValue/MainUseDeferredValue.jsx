import React, {useDeferredValue, useEffect, useState} from 'react';
import SearchList from "./SearchList.jsx";

function MainUseDeferredValue(props) {
    const [query, setQuery] = useState('');
    console.log('☢☢☢☢☢☢')
    console.log('Текст в поле input:', query);
    const deferredQuery = useDeferredValue(query);

    useEffect(() => {
        console.log('App useEffect query: ', query);
    }, [query]);

    useEffect(() => {
        console.log('App useEffect deferredQuery: ', deferredQuery);
    }, [deferredQuery]);

    return (
        <div>
            <input
                type="text"
                   onChange={(e) => {setQuery(e.target.value)}}
            />
            <SearchList query={deferredQuery} />
        </div>
    );
}

export default MainUseDeferredValue;