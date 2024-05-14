import React from "react";
import HeaderView from "./header/header.view";
import ExploreController from "./explore/Explore.controller";
import BubbleSortController from "../BubbleSort/BubbleSort.controller";

const LandingPage = () => {
  return (
    <>
      <BubbleSortController />
      <HeaderView />
      <ExploreController />
    </>
  );
};

export default LandingPage;
