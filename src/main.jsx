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
import DijkstraAnimatedView from "./pages/dijkstrasAnimatedPage/DjikstraAnimeted.view";
import MissingPageView from "./pages/missingPage/MissingPage.view";
import UnderDevelopmentView from "./pages/missingPage/UnderDevelopment.view";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      { path: "/", element: <ExploreController /> },
      { path: "/bubble", element: <BubbleSortController /> },
      { path: "/selection", element: <SelectionSortController /> },
      { path: "/insertion", element: <InsertionSortController /> },
      { path: "/quick", element: <UnderDevelopmentView /> },
      { path: "/merge", element: <UnderDevelopmentView /> },
      { path: "/linear", element: <UnderDevelopmentView /> },
      { path: "/width", element: <UnderDevelopmentView /> },
      { path: "/depth", element: <UnderDevelopmentView /> },
      { path: "/jump", element: <UnderDevelopmentView /> },
      { path: "/binary", element: <UnderDevelopmentView /> },
      { path: "/ternary", element: <UnderDevelopmentView /> },
      { path: "/exponential", element: <UnderDevelopmentView /> },
      { path: "/cycle-detection", element: <UnderDevelopmentView /> },
      { path: "/dijkstra", element: <DijkstraAnimatedView/> },
      { path: "/a-star", element: <UnderDevelopmentView /> },
      { path: "/state-props", element: <UnderDevelopmentView /> },
      { path: "/use-context", element: <UnderDevelopmentView /> },
      { path: "/server-client", element: <ServerClientAnimation /> },
      { path: "/rest-api", element: <UnderDevelopmentView /> },
      { path: "/webhook", element: <UnderDevelopmentView /> },
      { path: "*", element: <MissingPageView /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
