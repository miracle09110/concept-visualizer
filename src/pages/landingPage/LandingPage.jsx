import React from "react";
import HeaderView from "./header/Header.view";
import ExploreController from "./explore/Explore.controller";

const LandingPage = () => {
  return (
    <>
      <HeaderView />
      <ExploreController/>
    </>
  );
};

export default LandingPage;
