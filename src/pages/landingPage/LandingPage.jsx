import React from "react";
import HeaderView from "./header/header.view";
import ExploreController from "./explore/Explore.controller";
import { Outlet } from "react-router";
import Navbar from "../../components/navbar/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      {/* <ExploreController /> */}
      <Outlet />
    </>
  );
};

export default LandingPage;
