import { RiFolder3Fill } from "react-icons/ri";

const NavEducation = ({ setSelectedMenu, selectedMenu }) => {
  return (
    <>
      <div
        onClick={() => setSelectedMenu("education")}
        className="flex items-center gap-1 cursor-pointer "
      >
        <RiFolder3Fill size={24} color="#3A49A4" />{" "}
        <span
          className={`${
            selectedMenu == "education" ? "text-white" : "text-s1"
          }`}
        >
          education
        </span>
      </div>
    </>
  );
};

export default NavEducation;
