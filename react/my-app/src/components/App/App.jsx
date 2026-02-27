import {useState} from 'react'
import './App.css'
import MyName from "../MyName/MyName.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Хеллой бой</h1>
            <p>Я твой друг React</p>
            <MyName />
        </div>
    )
}

export default App
