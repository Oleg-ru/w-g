import React from 'react';
import {Link} from "react-router";

function AboutPage(props) {
    return (
        <div>
            <h1>Страница о нас</h1>
            <Link to={"/"}>На главную</Link>
        </div>

    );
}

export default AboutPage;