import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Introduction from "./sections/Introduction";
import Game from "./sections/Game";
import Experiences from "./sections/Experiences";
import Skills from "./sections/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Introduction />,
  },
  {
    path: "/game",
    element: <Game />,
  },
  {
    path: "/experiences",
    element: <Experiences />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="main-container">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
