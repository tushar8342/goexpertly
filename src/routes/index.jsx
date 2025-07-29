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
import Training from "../components/training";
import Expertmarketplace from "../components/expertmarketplace";
import Archive from "../components/archive";
import Cart from "../components/cart";
import SingleTrainingDetail from "../components/SingleTrainingDetail";
import PaymentSuccess from "../components/payment-success";
import PaymentCancel from "../components/payment-cancel";
import Profile from "../components/profile";
import MyOrders from "../components/myOrders";
import UpdatePassword from "../components/auth/updatePassword";
import Search from "../components/search";
import SingleArchiveDetail from "../components/SingleArchiveDetail";
import Resources from "../components/resources";
import Article1 from "../components/resources/Article1";
import Article2 from "../components/resources/Article2";
import Article3 from "../components/resources/Article3";
import Article4 from "../components/resources/Article4";
import Article5 from "../components/resources/Article5";
import SingleLifeSciences from "../components/SingleLifeSciences";
import LifeSciences from "../components/lifeSciences";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forgot-password/:tokenid" element={<UpdatePassword />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/hr-compliance" element={<Hrcompliance />} />
      <Route path="/Subscribe" element={<Subscribe />} />
      <Route path="/consulting" element={<Consulting />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/webinars" element={<Webinars />} />
      <Route path="/training" element={<Training />} />
      <Route path="/training/:id" element={<SingleTrainingDetail />} />
      <Route path="/archive/:id" element={<SingleArchiveDetail />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/lifesciences" element={<LifeSciences />} />
      <Route path="/lifesciences/:id" element={<SingleLifeSciences />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment-success/:paramsid" element={<PaymentSuccess />} />
      <Route path="/payment-cancel" element={<PaymentCancel />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/myOrders" element={<MyOrders />} />
      <Route path="/search" element={<Search />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/expertmarketplace" element={<Expertmarketplace />} />
      <Route
        path="/resources/5-best-practices-for-handling-workplace-sexual-harassment-complaints"
        element={<Article1 />}
      />
      <Route
        path="/resources/california-leaves-of-absence-employers-must-understand-compliance"
        element={<Article2 />}
      />{" "}
      <Route
        path="/resources/project-management-for-human-resource-managers"
        element={<Article3 />}
      />
      <Route
        path="/resources/how-metrics-can-help-avoid-common-compliance-mistakes"
        element={<Article4 />}
      />
      <Route
        path="/resources/the-coronavirus-aid-relief-and-economic-security-cares-act-and-its-impact-on-unemployment-insurance"
        element={<Article5 />}
      />
    </Routes>
  );
};

export default AllRoutes;
