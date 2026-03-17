import React from 'react';
import './HomePage.css'
import MainApi from "../components/CustomHooks/CustomUseApi/MainApi.jsx";

function HomePage(props) {

    return (
        <div className="homePage">
            <MainApi />
        </div>
    );
}

export default HomePage;