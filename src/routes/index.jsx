import React from "react";
import { Route, Routes } from "react-router-dom";
// import Slider from "../components/slider/slider";
import Home from "../components/Home";
import Aboutus from "../components/about-us";
import Login from "../components/auth/login";
import Signup from "../components/auth/signup";
import ForgotPassword from "../components/auth/forgotpassword";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default AllRoutes;
