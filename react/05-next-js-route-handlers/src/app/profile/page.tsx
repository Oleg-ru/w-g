'use client'

import {useState} from "react";

function ProfilePage() {

    const [count, setCount] = useState(0)

    return (
        <div className="p-3 border border-b-blue-500">
            <h2>Профиль</h2>
            <p>Счетчик: {count}</p>
            <button onClick={() => {setCount(prev => prev + 1)}}>+1</button>
        </div>
    );
}

export default ProfilePage;