import React from 'react';
import styled from "styled-components";
import {Link} from "react-router";

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
    return (
        <nav>
            <StyledLink to={"/"}>Главная</StyledLink>
            <StyledLink to={"/about"}>О нас</StyledLink>
            <StyledLink to={"/auth"}>Войти</StyledLink>
        </nav>
    );
}

export default NavBar;