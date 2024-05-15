import React from "react";
import HeaderView from "./header/header.view";
import ExploreController from "./explore/Explore.controller";
import { Outlet } from "react-router";

const LandingPage = () => {
  return (
    <>
      <HeaderView />
      {/* <ExploreController /> */}
      <Outlet />
    </>
  );
};

export default LandingPage;
