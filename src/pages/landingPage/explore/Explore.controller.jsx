import React from "react";
import ExploreView from "./Explore.view";

const concepts = [
  {
    category: "Search Algorithms",
    // description: "Discover and interact with popular sorting, search, and pathfinding algorithms. Enhance your understanding through hands-on exploration.",
    items: [
      {
        title: "Linear Search",
        subtitle: "O(n^2)",
        image: "",
        link: "/linear",
      },
      {
        title: "Depth first",
        subtitle: "O(n^2)",
        image: "",
        link: "/depth",
      },
      {
        title: "Width first",
        subtitle: "O(n^2)",
        image: "",
        link: "/width",
      },
      {
        title: "Jump Search",
        subtitle: "O(n^2)",
        image: "",
        link: "/jump",
      },
      {
        title: "Binary Search",
        subtitle: "O(n^2)",
        image: "",
        link: "/binary",
      },
      {
        title: "Ternary Search",
        subtitle: "O(n^2)",
        image: "",
        link: "/ternary",
      },
      {
        title: "Exponential Search",
        subtitle: "O(n^2)",
        image: "",
        link: "/exponential",
      },
    ],
  },
  {
    category: "Sort Algorithms",
    items: [
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
    ],
  },
  {
    category: "Path Finding Algorithms",
    items: ["Cycle detection", "Dijkstra’s algorithm", "A* algorithm"],
  },
  {
    category: "React Concepts",
    // description: "Explore interactive visualizations to understand React's State, Props, and useContext feature. Enhance your React skills with engaging visuals.",
    items: ["State and Props", "useContext"],
  },
  {
    category: "Web Concepts",
    // description: "Explore interactive visualizations of key web concepts including Server-Client architecture, REST API, and Webhooks. Enhance your understanding with engaging visuals.",
    items: ["Server-Client", "REST API", "Webhook"],
  },
];

const ExploreController = () => {
  return <ExploreView concepts={concepts} />;
};

export default ExploreController;
