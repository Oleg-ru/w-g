import React from 'react';
import './HomePage.css'
import programmer from "../assets/programmer.jpg"
import Button from "../components/Button/Button.jsx";
import UserList from "../components/UserList/UserList.jsx";

function HomePage(props) {
    return (
        <div className="homePage">
            <h3>
                Домашняя страница. Welcome!
            </h3>
            <img src={programmer} alt="programmer" />
            <p>Описание мой страницы</p>
            <Button name={'Первая кнопка'}/>
            <UserList />
            <img src="images/laptop.jpg" alt=""/>
        </div>
    );
}

export default HomePage;