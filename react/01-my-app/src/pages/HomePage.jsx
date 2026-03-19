import React from 'react';
import './HomePage.css'
import MainUseDeferredValue from "../components/CustomHooks_StandartHooks/UseDeferredValue/MainUseDeferredValue.jsx";

function HomePage(props) {

    return (
        <div className="homePage">
            <MainUseDeferredValue />
        </div>
    );
}

export default HomePage;