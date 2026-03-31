import React, {useEffect} from 'react';
import styled from "styled-components";
import {Link, useLocation, useNavigate} from "react-router";

const StyledLink = styled(Link)`
    color: blue;
    text-decoration: none;
    margin-right: 30px;
    
    &:hover {
        color: darkblue;
        text-decoration: underline;
    }
`;

function NavBar(props) {
    const isAuth = true;
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth && location.pathname.startsWith("/about")) {
            navigate('/auth');
        }
    }, [isAuth, location.pathname, navigate]);
    
    return (
        <nav style={{backgroundColor: 'yellowgreen', padding: "0.5rem"}}>
            <StyledLink to={"/"}>Главная</StyledLink>
            <StyledLink to={"/about"}>О нас</StyledLink>
            <StyledLink to={"/auth"}>Войти</StyledLink>
        </nav>
    );
}

export default NavBar;