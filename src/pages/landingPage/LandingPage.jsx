import React from "react";
import { Outlet } from "react-router";
import NavbarController from "../../components/navbar/Navbar.controller";
import FooterController from "../../components/footer/Footer.controller";

const LandingPage = () => {
  return (
    <>
      <NavbarController />
      <Outlet />
      <FooterController />
    </>
  );
};

export default LandingPage;
