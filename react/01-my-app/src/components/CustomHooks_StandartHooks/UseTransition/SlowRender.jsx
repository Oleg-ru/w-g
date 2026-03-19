import React, {useState, useTransition} from 'react';

function SlowRender(props) {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    const [isPending, startTransition] = useTransition();

    function handleChange(e) {
        const value = e.target.value;
        setInput(value)

        if (!value.trim()) {
            setList([])
            return
        }

        startTransition(() => {
            const items = [];
            for (let i = 0; i < 50000; i++) {
                items.push({key: i, value: e.target.value})
            }
            setList(items)
        })
    }

    return (
        <div>
            <input type="text" value={input} onChange={handleChange}/>
            {isPending ? <div>Загрузка...</div> : (
                <ul>
                    {list.map(item => <li key={item.key}>{item.value}</li>)}
                </ul>
            )}
        </div>
    );
}

export default SlowRender;