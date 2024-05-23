import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import ExploreController from "./pages/landingPage/explore/Explore.controller";
import BubbleSortController from "./pages/BubbleSort/BubbleSort.controller";
import InsertionSortController from "./pages/InsertionSort/InsertionSort.controller";
import ServerClientAnimation from "./pages/ServerClient/ServerClient.view";
import SelectionSortController from "./pages/SelectionSort/SelectionSort.controller";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <ExploreController /> },
      { path: "/bubble", element: <BubbleSortController /> },
      { path: "/selection", element: <SelectionSortController /> },
      { path: "/insertion", element: <InsertionSortController /> },
      { path: "/quick", element: null },
      { path: "/merge", element: null },
      { path: "/linear", element: null },
      { path: "/jump", element: null },
      { path: "/binary", element: null },
      { path: "/ternary", element: null },
      { path: "/exponential", element: null },
      { path: "/cycle-detection", element: null },
      { path: "/dijkstra", element: null },
      { path: "/a-star", element: null },
      { path: "/state-props", element: null },
      { path: "/use-context", element: null },
      { path: "/server-client", element: <ServerClientAnimation /> },
      { path: "/rest-api", element: null },
      { path: "/webhook", element: null },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
