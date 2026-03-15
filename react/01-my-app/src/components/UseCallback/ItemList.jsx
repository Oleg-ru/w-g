import React, {useCallback, useState} from 'react';
import List from "./List.jsx";
import {items} from "./array.js";

function ItemList(props) {
    const [count, setCount] = useState(0);

    const handleItemCLick = useCallback((id) => {
        console.log(`Клик по ID => ${id}`)
    }, []);

    return (
        <div>
            <button onClick={() => {setCount(count + 1)}}>
                Отредндерить {count}
            </button>
            <List items={items} handleItemCLick={handleItemCLick}/>
        </div>
    );
}

export default ItemList;