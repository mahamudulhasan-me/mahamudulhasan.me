import { useState } from "react";
import { HiTerminal } from "react-icons/hi";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiArrowRightSLine,
  RiFolder3Fill,
  RiGamepadFill,
  RiInformationFill,
} from "react-icons/ri";
import NavContact from "../../components/AboutInfoNav/NavContact";
import NavEducation from "../../components/AboutInfoNav/NavEducation";
import NavInterested from "../../components/AboutInfoNav/NavInterested";
const About = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="grid grid-cols-12 h-full w-full">
      <div className="col-span-7 border-r border-p4 w-full h-full">
        <div className="h-full">
          <div className="w-[31.5%] border-r border-p4 h-full flex justify-start text-s1">
            <div className="w-14 border-r border-p4  flex flex-col items-center pt-5">
              <div className=" text-2xl space-y-7">
                <HiTerminal />
                <RiInformationFill />
                <RiGamepadFill />
              </div>
            </div>
            <div className="w-full">
              <div>
                <div
                  data-aos="fade-down"
                  onClick={() => setShowInfo(!showInfo)}
                  className="border-b border-p4 w-full h-10 flex gap-1 items-center px-3 cursor-pointer"
                >
                  {showInfo ? (
                    <RiArrowDownSFill size={24} />
                  ) : (
                    <RiArrowRightSFill size={24} />
                  )}{" "}
                  Personal Info
                </div>

                {showInfo ? (
                  <div data-aos="zoom-in" className={`px-3 mt-4 space-y-4 `}>
                    <div>
                      <div className="flex items-center gap-1">
                        <RiArrowRightSLine size={24} />{" "}
                        <RiFolder3Fill size={24} color="#E99287" /> bio
                      </div>
                    </div>
                    {/* interested nav  */}
                    <NavInterested />
                    <div>
                      {/* education  */}
                      <NavEducation />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <NavContact />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-5 border-p4 w-full h-full">tte</div>
    </div>
  );
};

export default About;
