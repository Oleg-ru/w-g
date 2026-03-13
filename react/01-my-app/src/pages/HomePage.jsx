import React from 'react';
import './HomePage.css'
import CustomVideoPlayer from "../components/HookUseRef/CustomVideoPlayer.jsx";

function HomePage(props) {

    return (
        <div className="homePage">
            <CustomVideoPlayer />
        </div>
    );
}

export default HomePage;