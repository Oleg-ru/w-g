import './App.css'
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import HomePage from "../../pages/HomePage.jsx";

function App() {

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
