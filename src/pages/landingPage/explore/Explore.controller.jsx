import React from "react";
import ExploreView from "./Explore.view";
import useContextImg from "/react-section/usecontext-img.png";
import useStateImg from "/react-section/usestate-img.png";
import serverClient from "../../nodejsSection/server-client.jpg";
import restAPI from "../../nodejsSection/rest-api.jpg";
import webHooks from "../../nodejsSection/webhooks.png";

const concepts = [
  {
    category: "Search Algorithms",
    // description: "Discover and interact with popular sorting, search, and pathfinding algorithms. Enhance your understanding through hands-on exploration.",
    items: [
      {
        title: "Linear Search",
        label: "Time Complexity:",
        subtitle: "O(n)",
        image: "",
        link: "/linear",
      },
      {
        title: "Depth first",
        label: "Time Complexity:",
        subtitle: "O(V+E)",
        image: "",
        link: "/depth",
      },
      {
        title: "Width first",
        label: "Time Complexity:",
        subtitle: "O(V+E)",
        image: "",
        link: "/width",
      },
      {
        title: "Jump Search",
        label: "Time Complexity:",
        subtitle: "O(1)",
        image: "",
        link: "/jump",
      },
      {
        title: "Binary Search",
        label: "Time Complexity:",
        subtitle: "O(logn)",
        image: "",
        link: "/binary",
      },
      {
        title: "Ternary Search",
        label: "Time Complexity:",
        subtitle: "O(log3 N)",
        image: "",
        link: "/ternary",
      },
      {
        title: "Exponential Search",
        label: "Time Complexity:",
        subtitle: "O(logn)",
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
        label: "Time Complexity:",
        subtitle: "O(n^2)",
        image: "",
        link: "/bubble",
      },
      {
        title: "Selection Sort",
        label: "Time Complexity:",
        subtitle: "O(n^2)",
        image: "",
        link: "/selection",
      },
      {
        title: "Insertion Sort",
        label: "Time Complexity:",
        subtitle: "O(n^2)",
        image: "",
        link: "/insertion",
      },
      {
        title: "Quick Sort",
        label: "Time Complexity:",
        subtitle: "O(n^2)",
        image: "",
        link: "/quick",
      },
      {
        title: "Merge Sort",
        label: "Time Complexity:",
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
        label: "",
        subtitle: "Learn more about React states and props",
        image: useStateImg,
        link: "/states-props",
      },
      {
        title: "useContext",
        label: "",
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
        label: "",
        subtitle: "",
        image: serverClient,
        link: "/server-client",
      },
      {
        title: "REST API",
        label: "",
        subtitle: "",
        image: restAPI,
        link: "/rest-api",
      },
      {
        title: "Webhook",
        label: "",
        subtitle: "",
        image: webHooks,
        link: "/webhook",
      },
    ],
  },
];

const ExploreController = () => {
  return <ExploreView concepts={concepts} />;
};

export default ExploreController;
