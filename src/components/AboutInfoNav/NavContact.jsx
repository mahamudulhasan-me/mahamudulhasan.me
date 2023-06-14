import { useState } from "react";
import { RiArrowDownSFill, RiArrowRightSFill } from "react-icons/ri";

const NavContact = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <div>
        <div
          data-aos="fade-down"
          onClick={() => setShowInfo(!showInfo)}
          className="border-y mt-3 border-p4 w-full h-10 flex gap-1 items-center px-3 cursor-pointer"
        >
          {showInfo ? (
            <RiArrowDownSFill size={24} />
          ) : (
            <RiArrowRightSFill size={24} />
          )}{" "}
          contacts
        </div>

        {showInfo ? (
          <div data-aos="zoom-out-right" className={`px-3 mt-4 space-y-4 `}>
            contact
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default NavContact;
