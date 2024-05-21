import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/navbar/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default LandingPage;
