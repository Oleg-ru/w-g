import React, {useState} from 'react';
import './HomePage.css'

function HomePage(props) {

    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };
    return (
        <div className="homePage">
            <button onClick={handleClick}>Счетчик: {clicks}</button>
        </div>
    );
}

export default HomePage;