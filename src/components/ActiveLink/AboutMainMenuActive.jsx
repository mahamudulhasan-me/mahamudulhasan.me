import { NavLink } from "react-router-dom";

const AboutMainMenuActive = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-white" : "text-s1")}
    >
      {children}
    </NavLink>
  );
};

export default AboutMainMenuActive;
