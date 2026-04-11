import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../state/counterSlice.js";

function Counter() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    const inc = () => {dispatch(increment())};
    const dec = () => {dispatch(decrement())};

    return (
        <div>
            <h1>Счетчик: {count}</h1>
            <button onClick={inc}>Плюс 1</button>
            <button onClick={dec}>Минус 1</button>
        </div>
    );
}

export default Counter;