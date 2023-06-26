import "aos/dist/aos.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";
import "./index.css";
import provider from "./router/RouterProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={provider} />
  </React.StrictMode>
);
