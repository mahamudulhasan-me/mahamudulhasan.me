import { HiTerminal } from "react-icons/hi";
import { RiGamepadFill, RiInformationFill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
const About = () => {
  return (
    <div className="grid grid-cols-12 h-full w-full">
      <div className="col-span-7 border-r border-p4 w-full h-full">
        <div className="h-full flex">
          <div className="w-14 border-r border-p4   pt-5">
            <div className=" text-2xl flex flex-col items-center gap-5 text-s1">
              <Link>
                <HiTerminal />
              </Link>
              <Link to={"/about/personal-info"}>
                <RiInformationFill />
              </Link>
              <Link>
                <RiGamepadFill />
              </Link>
            </div>
          </div>
          <div className="w-full flex">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="col-span-5 border-p4 w-full h-full text-s1"></div>
    </div>
  );
};

export default About;
