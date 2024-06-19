import React from "react";
import NavbarView from "./Navbar.view";

function NavbarController() {
  const sortLinks = {
    name: "Sort",
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
  };

  const searchLinks = {
    name: "Search",
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
  };

  const pathFindingLinks = {
    name: "Path Finding",
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
  };

  const reactLinks = {
    name: "React",
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
  };

  const nodeLinks = {
    name: "Web Concepts",
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
  };

  const conceptLinks = [
    sortLinks,
    searchLinks,
    pathFindingLinks,
    reactLinks,
    nodeLinks,
  ];

  return <NavbarView conceptLinks={conceptLinks} />;
}

export default NavbarController;
