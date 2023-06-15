import ActiveNav from "../../../components/ActiveLink/ActiveNav";

const Navbar = () => {
  return (
    <div className="text-s1 text-lg h-14 px-6 flex justify-between items-center border-b border-p4">
      <div className="w-1/5">_mahamudul-hasan</div>
      <nav className="w-4/5 mx-auto border-x border-p4 h-full">
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
      </nav>
      <div className="w-2/12 text-right">_contact-me</div>
    </div>
  );
};

export default Navbar;
