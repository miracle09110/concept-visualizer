import React from "react";
import NavbarView from "./Navbar.view";

function NavbarController() {
  const algorithmLinks = [
    {
      category: "Sort Algorithms",
      link: "/#sort",
      children: [
        {
          name: "Bubble Sort",
          link: "/bubble",
        },
        {
          name: "Selection Sort",
          link: "/selection",
        },
        {
          name: "Insertion Sort",
          link: "/insertion",
        },
        {
          name: "Quick Sort",
          link: "/quick",
        },
        {
          name: "Merge Sort",
          link: "/merge",
        },
      ],
    },
    {
      category: "Search Algorithms",
      link: "/#search",
      children: [
        {
          name: "Depth-first Search",
          link: "/depth",
        },
        {
          name: "Width-first Search",
          link: "/width",
        },
        {
          name: "Jump Search",
          link: "/jump",
        },
        {
          name: "Binary Search",
          link: "/binary",
        },
        {
          name: "Ternary Search",
          link: "/exponential",
        },
      ],
    },
    {
      category: "Path Finding Algorithms",
      link: "/#path-finding",
      children: [
        {
          name: "Cycle Detection",
          link: "/cycle-detection",
        },
        {
          name: "Dijkstra's Algorithm",
          link: "/dijkstra",
        },
        {
          name: "A* Algorithm",
          link: "/a-star",
        },
      ],
    },
  ];

  const conceptLinks = [
    {
      category: "Algorithms",
      link: "/#sort",
      children: [...algorithmLinks],
    },
    {
      category: "React Concepts",
      link: "/#react",
      children: [
        {
          name: "State and Props",
          link: "/state-props",
        },
        {
          name: "useContext",
          link: "/state-props",
        },
      ],
    },
    {
      category: "Web Concepts",
      link: "/#nodejs",
      children: [
        {
          name: "Client-Server",
          link: "/server-client",
        },
        {
          name: "REST API",
          link: "/rest-api",
        },
        {
          name: "Webhooks",
          link: "/webhook",
        },
      ],
    },
  ];

  return <NavbarView conceptLinks={conceptLinks} />;
}

export default NavbarController;
