import { RiArrowRightSLine, RiFolder3Fill } from "react-icons/ri";

const NavBio = () => {
  return (
    <>
      <div>
        <div className="flex items-center gap-1">
          <RiArrowRightSLine size={24} />{" "}
          <RiFolder3Fill size={24} color="#E99287" /> bio
        </div>
      </div>
    </>
  );
};

export default NavBio;
