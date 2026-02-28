import React, {useState} from 'react';
import './HomePage.css'

function HomePage(props) {

    const [text, setText] = useState(null);
    const handleOnChange = (e) => {
        setText(e.target.value)
    };

    return (
        <div className="homePage">
            <input onChange={handleOnChange} />
            <div>Текст: {text}</div>
        </div>
    );
}

export default HomePage;