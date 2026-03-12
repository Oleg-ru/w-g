import React, {useState} from 'react';

function MyComponent({count = 0, increment}) {
    return (
        <div>
            <p>Счетчик: {count}</p>
            <button onClick={increment}>Увеличить</button>
        </div>
    );
}

function withCounter(Component, initialCount = 0) {
    function WithCounterComponent(props) {
        const [count, setCount] = useState(props.initialCount || initialCount);

        const increment = () => {
            setCount(count + 1);
        };

        return <Component count={count} increment={increment} {...props}/>
    }

    return WithCounterComponent;
}

const HocComponent = withCounter(MyComponent, 10);

export default HocComponent;