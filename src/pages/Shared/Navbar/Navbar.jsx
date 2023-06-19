import { useState } from "react";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ActiveNav from "../../../components/ActiveLink/ActiveNav";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      <div className="lg:w-[21%] w-full lg:pl-6 lg:px-0 px-10 flex justify-between items-center">
        <span>_mahamudul-hasan</span>
        <span className="lg:hidden">
          {isMenuOpen ? (
            <RiCloseFill onClick={() => setIsMenuOpen(!isMenuOpen)} size={36} />
          ) : (
            <RiMenuFill onClick={() => setIsMenuOpen(!isMenuOpen)} size={30} />
          )}
        </span>
      </div>

      {/* responsive menu  */}
      {isMenuOpen && (
        <nav
          data-aos="fade-left"
          className="top-14 pt-4 right-0 bottom-0 w-full h-[calc(100vh-7.1rem)]  absolute bg-p2"
        >
          <ul className="responsive-menu">
            <Link to={"/"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <li>_home</li>
            </Link>
            <Link to={"/"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <li>_about-me</li>
            </Link>
            <Link to={"/projects"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <li>_projects</li>
            </Link>
            <Link to={"/contact"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <li>_contact</li>
            </Link>
          </ul>
        </nav>
      )}
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
