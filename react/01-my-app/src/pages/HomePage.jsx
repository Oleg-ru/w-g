import React from 'react';
import './HomePage.css'
import MainCounter from "../components/CustomHooks_StandartHooks/UseReducer/MainCounter.jsx";

function HomePage(props) {

    return (
        <div className="homePage">
            <MainCounter />
        </div>
    );
}

export default HomePage;