import Home from "./pages/Home.jsx";
import {Route, Routes} from "react-router";
import NotFound from "./pages/NotFound.jsx";
import UserPage from "./pages/UserPage.jsx";

function App() {

  return (
    <>
      <Routes >
        <Route index element={<Home />}/>
        <Route path={"/user/:userId"} element={<UserPage />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
