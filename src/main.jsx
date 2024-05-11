import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import SortingPage from "./pages/SortingPage/SortingPage";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/sorting",
    element: <SortingPage />,
    children: [
      {
        path: "bubble",
        element: null,
      },
      {
        path: "selection",
        element: null,
      },
      {
        path: "insertion",
        element: null,
      },
      {
        path: "quick",
        element: null,
      },
      {
        path: "merge",
        element: null,
      },
    ],
  },
  {
    path: "/search",
    element: null,
    children: [
      {
        path: "linear",
        element: null,
      },
      {
        path: "jump",
        element: null,
      },
      {
        path: "binary",
        element: null,
      },
      {
        path: "ternary",
        element: null,
      },
      {
        path: "exponential",
        element: null,
      },
    ],
  },
  {
    path: "/path-finding",
    element: null,
    children: [
      {
        path: "cycle-detection",
        element: null,
      },
      {
        path: "dijkstra",
        element: null,
      },
      {
        path: "a-star",
        element: null,
      },
    ],
  },
  {
    path: "/react-concepts",
    element: null,
    children: [
      {
        path: "state-props",
        element: null,
      },
      {
        path: "use-context",
        element: null,
      },
    ],
  },
  {
    path: "/web-concepts",
    element: null,
    children: [
      {
        path: "server-client",
        element: null,
      },
      {
        path: "rest-api",
        element: null,
      },
      {
        path: "webhook",
        element: null,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
