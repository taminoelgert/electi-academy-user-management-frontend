import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./home/Home.jsx";
import Login from "./login/Login.js";
import Profile from "./profile/Profile.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Navigate to={"home"} />} />
        <Route path={"home"} element={<Home />} />
        <Route path={"profile/*"} element={<Profile />} />
        <Route path={"new-user"} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
