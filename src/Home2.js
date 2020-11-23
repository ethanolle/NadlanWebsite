import React from "react";
import Navbar from "./component/Navbar/Navbar";
import ContactTwo from "./component/ContactTwo";
import TypeBanner from "./component/Banner/TypeBanner";
import Footer from "./component/Footer";
import jhonData from "./component/jhonData";
import "./Home2.css";

export const Home2 = () => (
  <div className='body_wrapper'>
    <Navbar
      mContainer='custome_container'
      mainlogo='logo3.png'
      stickylogo='logo3.png'
    />
    <TypeBanner jhonData={jhonData} />
    <ContactTwo />
    <Footer jhonData={jhonData} />
  </div>
);
