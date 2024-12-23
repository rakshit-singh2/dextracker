import React from "react";
import { Outlet } from "react-router-dom";
import Navgation from "./Components/Navgation/Navgation";
import Footer from "./Components/Footer/Footer";




const Services = () => {
  return (
    <>
      <header>
        <Navgation />
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Services;
