import React from "react";
import HeaderView from "./header/header.view";
import ExploreController from "./explore/Explore.controller";
import SelectionSortController from "../SelectionSort/SelectionSort.controller";

const LandingPage = () => {
  return (
    <>
      <SelectionSortController />
      <HeaderView />
      <ExploreController />
    </>
  );
};

export default LandingPage;
