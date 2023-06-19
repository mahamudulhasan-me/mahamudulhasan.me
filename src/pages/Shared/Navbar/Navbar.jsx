import { RiMenuFill } from "react-icons/ri";
import ActiveNav from "../../../components/ActiveLink/ActiveNav";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <ActiveNav to={"/"}>_home</ActiveNav>
      </li>
      <li>
        <ActiveNav to={"/about/professional-info"}>_about-me</ActiveNav>
      </li>
      <li>
        <ActiveNav to={"/projects"}>_projects</ActiveNav>
      </li>
    </>
  );
  return (
    <div className="text-s1  text-lg sticky top-0 h-14 bg-p2 z-50 flex justify-between items-center border-y border-p4">
      {/* responsive menu  */}
      <nav className="lg:w-[21%] w-full lg:pl-6 lg:px-0 px-10 flex justify-between items-center">
        <span>_mahamudul-hasan</span>
        <RiMenuFill size={30} />
      </nav>

      {/* large device menu  */}
      <nav className="w-[calc(100vw-21%)] mx-auto border-x border-p4 h-full hidden lg:flex justify-between items-center">
        <ul className="menu_nav-items">{navItems}</ul>

        <ul className="h-full">
          <li className="w-[153px] border-l border-p4 h-full flex justify-center items-center hover:text-white transition-all">
            <ActiveNav to={"/contact"}>_contact-me</ActiveNav>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
