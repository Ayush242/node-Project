import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/pages/navbar";
import Home from "./components/pages/home";
import MainPage from "./components/pages/MainPage";
// import SignUp from "./components/pages/SignUp";
import AvatarEdit from "./components/pages/AvatarEdit";
import TodoNavBar from "./components/pages/TodoNavBar";

import "./style/home.css";
import "./style/navbar.css";
import CoinManager from "./components/pages/CoinManager";
export default function App() {
  return (
    <BrowserRouter>
      <CoinManager>
        {/* temp code for nav bar */}
        {window.location.pathname === "/home" ||
        window.location.pathname === "/avatar/edit" ? (
          <TodoNavBar />
        ) : (
          <Navbar />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/avatar/edit" element={<AvatarEdit />} />
        </Routes>
      </CoinManager>
    </BrowserRouter>
  );
}
