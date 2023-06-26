import { RiFolder3Fill } from "react-icons/ri";

const NavBio = ({ setSelectedMenu, selectedMenu }) => {
  // const [select, setSelect]
  return (
    <div
      onClick={() => {
        setSelectedMenu("bio");
      }}
      className="flex items-center gap-1 cursor-pointer "
    >
      <RiFolder3Fill size={24} color="#E99287" />{" "}
      <span className={`${selectedMenu === "bio" ? "text-white" : "text-s1"}`}>
        bio
      </span>
    </div>
  );
};

export default NavBio;
