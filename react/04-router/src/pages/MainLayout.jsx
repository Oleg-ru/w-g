import React from 'react';
import NavBar from "../components/NavBar.jsx";
import {Outlet} from "react-router";

function MainLayout(props) {
    return (
        <>
         <NavBar/>
         <Outlet />
        </>
    );
}

export default MainLayout;