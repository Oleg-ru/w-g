import React, {useEffect} from 'react';
import {useLocation} from "react-router";

function PageTitleUpdater(props) {
    const location = useLocation();
    useEffect(() => {
        const pageTitles = {
            '/': 'Главная',
            '/about': 'О компании',
            '/contacts': 'Контакты',
            '/auth': 'Авторизация',
            '/auth/login': 'Вход',
            '/auth/register': 'Регистрация',
        };
        document.title = pageTitles[location.pathname] || "GG";
    }, [location]);
    return null;
}

export default PageTitleUpdater;