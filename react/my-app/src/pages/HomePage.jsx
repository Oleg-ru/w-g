import React from 'react';
import './HomePage.css'
import programmer from "../assets/programmer.jpg"
import Button from "../components/Button/Button.jsx";
import UserList from "../components/UserList/UserList.jsx";
import TextComponentC from "../components/TextComponentC/TextComponentC.jsx";
import TaskList from "../components/TaskList/TaskList.jsx";

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
            <TextComponentC />
            <TaskList />
        </div>
    );
}

export default HomePage;