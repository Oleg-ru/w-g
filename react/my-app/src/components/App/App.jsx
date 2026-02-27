import {useState} from 'react'
import './App.css'
import MyName from "../MyName/MyName.jsx";
import Email from "../Email/Email.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Хеллой бой</h1>
            <p>Я твой друг React</p>
            <MyName />
            <Email />
        </div>
    )
}

export default App
