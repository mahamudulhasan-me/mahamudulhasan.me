import { useState } from "react";
import { FaIndustry } from "react-icons/fa";
import {
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiFileHistoryFill,
  RiFolder3Fill,
} from "react-icons/ri";

const NavExperience = ({ selectedStatus }) => {
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
        <RiFolder3Fill size={24} color="#43D9AD" />{" "}
        <span className={`${showInfo && "text-white"}`}>experience</span>
      </div>
      {showInfo ? (
        <div data-aos="fade-in" className="pl-8 mt-3 space-y-2">
          <p
            onClick={() => selectedStatus("institute")}
            className="flex items-center gap-1"
          >
            <RiFileHistoryFill size={24} /> work-history
          </p>
          <p
            onClick={() => selectedStatus("university")}
            className="flex items-center gap-1"
          >
            <FaIndustry size={24} /> industry
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NavExperience;
