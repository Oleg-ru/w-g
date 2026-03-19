import React from 'react';
import './HomePage.css'
import MainTransition from "../components/CustomHooks_StandartHooks/UseTransition/MainTransition.jsx";

function HomePage(props) {

    return (
        <div className="homePage">
            <MainTransition />
        </div>
    );
}

export default HomePage;