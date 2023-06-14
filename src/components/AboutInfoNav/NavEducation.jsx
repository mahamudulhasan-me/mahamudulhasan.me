import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import {
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiFolder3Fill,
} from "react-icons/ri";

const NavEducation = () => {
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
        <RiFolder3Fill size={24} color="#3A49A4" /> education
      </div>
      {showInfo ? (
        <div data-aos="fade-down" className="pl-8 mt-3 space-y-2">
          <p className="flex items-center gap-1">
            <FaGraduationCap size={24} /> institute
          </p>
          <p className="flex items-center gap-1">
            <FaGraduationCap size={24} /> university
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default NavEducation;
