import React from 'react';
import './HomePage.css'
import CustomVideoPlayer from "../components/HookUseRef/CustomVideoPlayer.jsx";
import MemoProducts from "../components/Memoization/MemoProducts.jsx";
import ItemList from "../components/UseCallback/ItemList.jsx";

function HomePage(props) {

    return (
        <div className="homePage">
            <ItemList />
        </div>
    );
}

export default HomePage;