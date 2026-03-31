import React from 'react';
import NavBar from "../components/NavBar.jsx";
import {Outlet} from "react-router";
import Breadcrumbs from "../components/Breadcrumbs.jsx";

function MainLayout(props) {
    return (
        <>
         <NavBar/>
         <Breadcrumbs />
         <Outlet />
        </>
    );
}

export default MainLayout;