import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";

const provider = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/about-me",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

export default provider;
