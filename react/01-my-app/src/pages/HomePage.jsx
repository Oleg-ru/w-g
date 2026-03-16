import React from 'react';
import './HomePage.css'
import CustomVideoPlayer from "../components/HookUseRef/CustomVideoPlayer.jsx";
import MemoProducts from "../components/Memoization/MemoProducts.jsx";
import ItemList from "../components/UseCallback/ItemList.jsx";
import Main from "../components/UseContext/Main.jsx";

function HomePage(props) {

    return (
        <div className="homePage">
            <Main />
        </div>
    );
}

export default HomePage;