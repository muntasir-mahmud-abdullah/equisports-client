import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Banner from "./Banner";
import Testimonials from "../pages/Testimonials";
import WhyChooseUs from "../pages/WhyChooseUs";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Outlet></Outlet>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
