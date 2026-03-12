import './App.css'
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import HomePage from "../../pages/HomePage.jsx";
import {useState} from "react";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true)

    return (
        <>
            <Header />
            <main className='app'>
                <HomePage />
            </main>
            <Footer />
        </>
    )
}

export default App
