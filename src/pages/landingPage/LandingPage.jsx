import React from "react";
import HeaderView from "./header/Header.view";
import ExploreController from "./explore/Explore.controller";
import BubbleSort from "../BubbleSort/BubbleSort.view";

const LandingPage = () => {
  return (
    <>
      <BubbleSort />
      <HeaderView />
      <ExploreController />
    </>
  );
};

export default LandingPage;
