import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About/About";
import PersonalInfo from "../pages/About/PersonalInfo/PersonalInfo";
import ProfessionalInfo from "../pages/About/ProfessionalInfo/ProfessionalInfo";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Projects from "../pages/Projects/Projects";

const provider = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "/about/professional-info",
            element: <ProfessionalInfo />,
          },
          {
            path: "/about/personal-info",
            element: <PersonalInfo />,
          },
        ],
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default provider;
