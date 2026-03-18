import React from 'react';
import './HomePage.css'
import MainApi from "../components/CustomHooks/CustomUseApi/MainApi.jsx";
import MainForm from "../components/CustomHooks/CustomForm/MainForm.jsx";

function HomePage(props) {

    return (
        <div className="homePage">
            <MainForm />
        </div>
    );
}

export default HomePage;