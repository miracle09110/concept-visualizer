import React from "react";
import ExploreView from "./Explore.view";
import useContextImg from "/react-section/usecontext-img.png";
import useStateImg from "/react-section/usestate-img.png";

const concepts = [
  {
    category: "Search Algorithms",
    // description: "Discover and interact with popular sorting, search, and pathfinding algorithms. Enhance your understanding through hands-on exploration.",
    items: [
      "Linear Search",
      "Depth first",
      "Width first",
      "Jump Search",
      "Binary Search",
      "Ternary Search",
      "Exponential Search",
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
    description:
      "Explore interactive visualizations to understand React's State, Props, and useContext feature. Enhance your React skills with engaging visuals.",
    items: [
      {
        title: "State and Props",
        subtitle: "Learn more about React states and props",
        image: useStateImg,
        link: "/states-props",
      },
      {
        title: "useContext",
        subtitle: "Organize your React states with Context API",
        image: useContextImg,
        link: "/usecontext",
      },
    ],
  },
  {
    category: "Web Concepts",
    // description: "Explore interactive visualizations of key web concepts including Server-Client architecture, REST API, and Webhooks. Enhance your understanding with engaging visuals.",
    items: [
      {
        title: "Server-Client",
        subtitle: "O(n^2)",
        image: "",
        link: "/server-client",
      },
      {
        title: "REST API",
        subtitle: "O(n^2)",
        image: "",
        link: "/rest-api",
      },
      {
        title: "Webhook",
        subtitle: "O(n^2)",
        image: "",
        link: "/webhook",
      },
    ],
  },
];

const ExploreController = () => {
  return <ExploreView concepts={concepts} />;
};

export default ExploreController;
