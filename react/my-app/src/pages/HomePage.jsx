import React from 'react';
import './HomePage.css'
import Container from "../components/Container/Container.jsx";
import ModalPage from "../components/ModalPage/ModalPage.jsx";

function HomePage(props) {

    return (
        <div className="homePage">
            <ModalPage />
        </div>
    );
}

export default HomePage;