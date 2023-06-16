import { useState } from "react";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiInstagramFill,
  RiMediumFill,
  RiTwitterFill,
} from "react-icons/ri";
import { TbBrandFiverr } from "react-icons/tb";

import { Link } from "react-router-dom";

const FindMe = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div
        data-aos="fade-right"
        onClick={() => setShowInfo(!showInfo)}
        className={`${
          showInfo ? "text-white" : ""
        } pl-4 border-y border-p4 w-full h-10 flex gap-1 items-center px-3 cursor-pointer`}
      >
        {showInfo ? (
          <RiArrowDownSFill size={24} />
        ) : (
          <RiArrowRightSFill size={24} />
        )}
        find-me-also-in
      </div>

      {showInfo ? (
        <div
          data-aos="zoom-in"
          className={`px-3 mt-4 space-y-2 transition-all duration-500`}
        >
          <Link target="_blank" className="flex gap-1">
            <RiInstagramFill size={22} />{" "}
            <span className="hover:text-white transition-all">
              Instagram Account
            </span>
          </Link>
          <Link target="_blank" className="flex gap-1">
            <RiTwitterFill size={22} />{" "}
            <span className="hover:text-white transition-all">
              Twitter Profile
            </span>
          </Link>
          <Link target="_blank" className="flex gap-1">
            <TbBrandFiverr size={22} />{" "}
            <span className="hover:text-white transition-all">
              Fiver Account
            </span>
          </Link>
          <Link target="_blank" className="flex gap-1">
            <RiMediumFill size={22} />{" "}
            <span className="hover:text-white transition-all">
              Medium Profile
            </span>
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FindMe;
