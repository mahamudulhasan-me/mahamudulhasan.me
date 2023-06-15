import { useState } from "react";
import { FaNodeJs } from "react-icons/fa";
import {
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiDatabase2Fill,
  RiFolder3Fill,
  RiHtml5Fill,
  RiStackFill,
} from "react-icons/ri";

const NavSkills = ({ selectedStatus }) => {
  // const [eduInstitute, setEduInstitute] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowInfo(!showInfo)}
        className="flex items-center gap-1 cursor-pointer transition-all"
      >
        {showInfo ? (
          <RiArrowDownSLine size={24} />
        ) : (
          <RiArrowRightSLine size={24} />
        )}{" "}
        <RiFolder3Fill size={24} color="#E99287" />{" "}
        <span className={`${showInfo && "text-white"}`}>skills</span>
      </div>
      {showInfo ? (
        <div data-aos="fade-in" className="pl-8 mt-3 space-y-2">
          <p
            onClick={() => selectedStatus("front-end")}
            className="flex items-center gap-1 cursor-pointer"
          >
            <RiHtml5Fill size={24} /> front-end
          </p>
          <p
            onClick={() => selectedStatus("back-end")}
            className="flex items-center gap-1 cursor-pointer"
          >
            <FaNodeJs size={24} /> back-end
          </p>
          <p
            onClick={() => selectedStatus("database")}
            className="flex items-center gap-1 cursor-pointer"
          >
            <RiDatabase2Fill size={24} /> database
          </p>
          <p
            onClick={() => selectedStatus("other-skills")}
            className="flex items-center gap-1 cursor-pointer"
          >
            <RiStackFill size={24} /> others
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NavSkills;
