import React from 'react';
import './HomePage.css'
import ControlledForm from "../components/ControlledForm/ControlledForm.jsx";
import UncontrolledForm from "../components/UncontrolledForm/UncontrolledForm.jsx";

function HomePage(props) {

    return (
        <div className="homePage">
            <ControlledForm />
            <p>Не контролируемый:</p>
            <UncontrolledForm />
        </div>
    );
}

export default HomePage;