import React, {useState} from 'react';
import './HomePage.css'
import Greeting from "../components/Greeting/Greeting.jsx";

function HomePage(props) {

    return (
        <div className="homePage">
            <Greeting isLoggedIn={true}/>
        </div>
    );
}

export default HomePage;