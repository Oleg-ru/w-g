import React from 'react';
import {Route, Routes} from "react-router";
import MainLayout from "../pages/MainLayout.jsx";
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import AuthLayout from "../pages/AuthLayout.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegPage from "../pages/RegPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

function AppRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<HomePage />}/>
                <Route path="about" element={<AboutPage />}/>

                <Route path="auth" element={<AuthLayout />}>
                    <Route path={`login`} element={<LoginPage />}/>
                    <Route path={`register`} element={<RegPage />}/>
                </Route>

                <Route path="*" element={<NotFoundPage />}/>
            </Route>
        </Routes>
    );
}

export default AppRoutes;