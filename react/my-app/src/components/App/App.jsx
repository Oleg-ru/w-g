import './App.css'
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import HomePage from "../../pages/HomePage.jsx";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import {useState} from "react";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true)

    return (
        <>
            <Header />
            <main className='app'>
                <HomePage />
                <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
            </main>
            <Footer />
        </>
    )
}

export default App
