import React from "react";
import { Outlet } from "react-router";
import NavbarController from "../../components/navbar/Navbar.controller";
import FooterController from "../../components/footer/Footer.controller";

const LandingPage = () => {
  return (
    <div className="bg-[#222831] pattern-plus-neutral-700/40 pattern-plus-scale-[0.5]">
      <NavbarController />
      <div className="lg:w-4/5 mx-auto">
        <Outlet />
      </div>
      <FooterController />
    </div>
  );
};

export default LandingPage;
