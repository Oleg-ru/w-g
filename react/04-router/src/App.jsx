import {Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import AuthLayout from "./pages/AuthLayout.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegPage from "./pages/RegPage.jsx";

export const AppRoutes = {
  HOME: "/",
  ABOUT: "/about",
  AUTH: "/auth",
  LOGIN: "login",
  REG: "register",
  NOT_FOUND: "*"
};

function App() {

  return (
    <>
      <Routes>
        <Route path={AppRoutes.HOME} element={<HomePage />}/>
        <Route path={AppRoutes.ABOUT} element={<AboutPage />}/>
        <Route path={AppRoutes.AUTH} element={<AuthLayout />}/>
        <Route path={`${AppRoutes.AUTH}/${AppRoutes.LOGIN}`} element={<LoginPage />}/>
        <Route path={`${AppRoutes.AUTH}/${AppRoutes.REG}`} element={<RegPage />}/>
        <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />}/>
      </Routes>
    </>
  )
}

export default App
