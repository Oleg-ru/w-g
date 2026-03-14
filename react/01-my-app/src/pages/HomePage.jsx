import React from 'react';
import './HomePage.css'
import CustomVideoPlayer from "../components/HookUseRef/CustomVideoPlayer.jsx";
import MemoProducts from "../components/Memoization/MemoProducts.jsx";

function HomePage(props) {

    return (
        <div className="homePage">
            <MemoProducts />
        </div>
    );
}

export default HomePage;