import {useDispatch, useSelector} from "react-redux";
import {decrement, decrementByAmount, increment, incrementByAmount} from "../state/counterSlice.js";
import {useState} from "react";
import './Counter.css'

function Counter() {
    const [amount, setAmount] = useState(0)
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    const inc = () => {dispatch(increment())};
    const dec = () => {dispatch(decrement())};

    const incByAmount = () => {dispatch(incrementByAmount(amount) )};
    const decByAmount = () => {dispatch(decrementByAmount(amount))};

    const handleChange = (e) => setAmount(e.target.value);

    return (
        <div>
            <h1>Счетчик: {count}</h1>
            <button onClick={inc}>Плюс 1</button>
            <button onClick={dec}>Минус 1</button>
            <p>**************************************</p>
            <div className="flex flex-col justify-center items-center gap-3 border p-3">
                <input type="number"
                       value={amount}
                       onChange={handleChange}
                       className="border p-1"
                       min={0}
                />
                <button onClick={incByAmount}>Плюс {amount}</button>
                <button onClick={decByAmount}>Минус {amount}</button>
            </div>
        </div>
    );
}

export default Counter;