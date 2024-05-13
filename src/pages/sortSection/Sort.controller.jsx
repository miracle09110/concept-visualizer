import React from "react";
import SortView from "./Sort.view";

const conceptItems = [
  {
    title: "Bubble Sort",
    subtitle: "O(n^2)",
    image: "",
    link: "/bubble",
  },
  {
    title: "Selection Sort",
    subtitle: "O(n^2)",
    image: "",
    link: "/selection",
  },
  {
    title: "Insertion Sort",
    subtitle: "O(n^2)",
    image: "",
    link: "/insertion",
  },
  {
    title: "Quick Sort",
    subtitle: "O(n^2)",
    image: "",
    link: "/quick",
  },
  {
    title: "Merge Sort",
    subtitle: "O(n^2)",
    image: "",
    link: "/merge",
  },
];

function SortController() {
  return <SortView conceptItems={conceptItems} />;
}

export default SortController;
