import React, {useState, useTransition} from 'react';

const data = Array.from({length: 10000}, (_, i) => `Элемент ${i + 1}`);

function Filter(props) {
    const [query, setQuery] = useState('')
    const [filteredData, setFilteredData] = useState(data);
    const [isPending, startTransition] = useTransition();

    function handleSearch(e) {
        const value = e.target.value;
        setQuery(value);

        startTransition(() => {
            setFilteredData(data.filter(item => item.toLowerCase().includes(value.toLowerCase())))
        })
    }


    return (
        <div>
            <input type="text" value={query} onChange={handleSearch} placeholder={"Поиск"}/>
            {isPending ? 'Загрузка...' : (
                <ul>
                    {filteredData.slice(0, 20).map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            )}
        </div>
    );
}

export default Filter;