import React, {useState, useTransition} from 'react';

function BasicExample(props) {
    const [isPending, startTransition] = useTransition()
    const [count, setCount] = useState(0);

    function handleCLick() {
        startTransition(() => {
            setCount(prev => prev + 1); 
        })

    }

    return (
        <div>
            <button onClick={handleCLick}>Увеличить счетчик</button>
             <span>Счетчик: {isPending ? 'Загрузка' : count}</span>
        </div>
    );
}

export default BasicExample;