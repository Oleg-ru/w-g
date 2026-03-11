import React from 'react';
import './HomePage.css'
import HocComponent from "../components/HOCComponent/HOCComponent.jsx";

function HomePage(props) {

    return (
        <div className="homePage">
            <HocComponent />
        </div>
    );
}

export default HomePage;