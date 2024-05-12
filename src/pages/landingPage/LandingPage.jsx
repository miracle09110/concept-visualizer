import React from "react";
import HeaderView from "./header/header.view";
import ExploreController from "./explore/Explore.controller";
import SelectionSort from "../SelectionSort/SelectionSort.view";

const LandingPage = () => {
  return (
    <>
      <SelectionSort />
      <HeaderView />
      <ExploreController />
    </>
  );
};

export default LandingPage;
