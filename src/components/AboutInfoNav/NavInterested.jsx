import { RiFolder3Fill } from "react-icons/ri";

const NavInterested = ({ setSelectedMenu, selectedMenu }) => {
  return (
    <>
      <div
        onClick={() => setSelectedMenu("interested")}
        className="flex items-center gap-1 cursor-pointer lg:pb-5"
      >
        <RiFolder3Fill size={24} color="#43D9AD" />{" "}
        <span
          className={`${
            selectedMenu == "interested" ? "text-white" : "text-s1"
          }`}
        >
          interested
        </span>
      </div>
    </>
  );
};

export default NavInterested;
