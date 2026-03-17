import React from 'react';
import './HomePage.css'
import MainStorage from "../components/CustomHooks/CustomUseLocalStorage/MainStorage.jsx";

function HomePage(props) {

    return (
        <div className="homePage">
            <MainStorage />
        </div>
    );
}

export default HomePage;