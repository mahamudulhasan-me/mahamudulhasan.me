import { NavLink } from "react-router-dom";

const ActiveNav = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "border-b-4 border-a1 w-full h-full flex justify-center items-center text-white"
          : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveNav;
