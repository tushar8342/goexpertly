import React from "react";
import { Route, Routes } from "react-router-dom";
// import Slider from "../components/slider/slider";
import Home from "../components/Home";
import Aboutus from "../components/about-us";
import Login from "../components/auth/login";
import Signup from "../components/auth/signup";
import ForgotPassword from "../components/auth/forgotpassword";
import TermsOfUse from "../components/terms-of-use";
import PrivacyPolicy from "../components/privacy-policy";
import Hrcompliance from "../components/hr-compliance";
import Subscribe from "../components/subscribe";
import ContactUs from "../components/contact-us";
import Consulting from "../components/consulting";
import Webinars from "../components/webinars";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/hr-compliance" element={<Hrcompliance />} />
      <Route path="/Subscribe" element={<Subscribe />} />
      <Route path="/consulting" element={<Consulting />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/webinars" element={<Webinars />} />
    </Routes>
  );
};

export default AllRoutes;