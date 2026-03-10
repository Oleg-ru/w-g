import React from 'react';
import './HomePage.css'
import RegForm from "../components/RegForm/RegForm.jsx";

function HomePage(props) {

    return (
        <div className="homePage">
            <RegForm />
        </div>
    );
}

export default HomePage;