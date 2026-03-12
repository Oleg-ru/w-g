import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./components/App.jsx";
import './main.css'
import Theme from "./components/Theme.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme />
  </StrictMode>,
)
