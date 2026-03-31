import React from 'react';
import NavBar from "../components/NavBar.jsx";
import {Outlet} from "react-router";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import PageTitleUpdater from "../components/PageTitleUpdater.js";

function MainLayout(props) {
    return (
        <>
            <PageTitleUpdater/>
         <NavBar/>
         <Breadcrumbs />
         <Outlet />
        </>
    );
}

export default MainLayout;