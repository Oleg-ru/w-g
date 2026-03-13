import React, {useEffect, useRef, useState} from 'react';

function NumberTracker(props) {
    const [number, setNumber] = useState(0);
    const prevNum = useRef(null);

    useEffect(() => {
        prevNum.current = number
    }, [number]);
    return (
        <div>
            <h2>Текущее число: {number}</h2>
            <h2>Предыдущее число: {prevNum.current}</h2>
            <button onClick={() => {setNumber(number + 1)}}>Увеличить число</button>
            <button onClick={() => {setNumber(number - 1)}}>Уменьшить число</button>
        </div>
    );
}

export default NumberTracker;