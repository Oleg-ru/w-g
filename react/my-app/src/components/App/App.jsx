import './App.css'
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import HomePage from "../../pages/HomePage.jsx";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import {useState} from "react";
import CounterC from "../CounterC/CounterC.jsx";
import UserProfile from "../UserProfile/UserProfile.jsx";
import ParentComponentC from "../ParentComponent/ParentComponentC.jsx";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true)

    return (
        <>
            <Header />
            <main className='app'>
                <HomePage />
                <CounterC />
                <UserProfile />
                <ParentComponentC />
            </main>
            <Footer />
        </>
    )
}

export default App
