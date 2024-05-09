import React from "react";
import ExploreView from "./Explore.view";

const concepts = [
  {
    category: "Algorithms",
    // description: "Discover and interact with popular sorting, search, and pathfinding algorithms. Enhance your understanding through hands-on exploration.",
    items: [
      "Bubble Sort",
      "Selection Sort",
      "Insertion Sort",
      "Quick Sort",
      "Merge Sort",
      "Linear Search",
      "Depth first",
      "Width first",
      "Jump Search",
      "Binary Search",
      "Ternary Search",
      "Exponential Search",
      "Cycle detection",
      "Dijkstra’s algorithm",
      "A* algorithm",
    ],
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
