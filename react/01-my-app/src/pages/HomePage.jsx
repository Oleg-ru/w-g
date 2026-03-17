import React from 'react';
import './HomePage.css'
import MainForm from "../components/CustomHooks/CustomForm/MainForm.jsx";

function HomePage(props) {

    return (
        <div className="homePage">
            <MainForm />
        </div>
    );
}

export default HomePage;