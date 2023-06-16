import ActiveNav from "../../../components/ActiveLink/ActiveNav";

const Navbar = () => {
  return (
    <div className="text-s1 text-lg h-14  flex justify-between items-center border-b border-p4">
      <div className="w-[19.2rem] pl-6">_mahamudul-hasan</div>
      <nav className="w-[calc(100vw-19.4rem)] mx-auto border-x border-p4 h-full flex justify-between items-center">
        <ul className="menu_nav-items">
          <li>
            <ActiveNav to={"/"}>_home</ActiveNav>
          </li>
          <li>
            <ActiveNav to={"/about/professional-info"}>_about-me</ActiveNav>
          </li>
          <li>
            <ActiveNav to={"/projects"}>_projects</ActiveNav>
          </li>
        </ul>
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
