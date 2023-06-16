import { Helmet } from "react-helmet";
import { HiTerminal } from "react-icons/hi";
import { RiGamepadFill, RiInformationFill } from "react-icons/ri";
import { Outlet } from "react-router-dom";
import AboutMainMenuActive from "../../components/ActiveLink/AboutMainMenuActive";
const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Mahamudul Hasan</title>
      </Helmet>
      <div className="grid grid-cols-12 h-full w-full">
        <div className="col-span-8 border-r border-p4 w-full h-full">
          <div className="flex ">
            <div className="min-w-[4rem] border-r border-p4   pt-5">
              <div className=" text-2xl flex flex-col items-center gap-5 text-s1">
                <AboutMainMenuActive to={"/about/professional-info"}>
                  <HiTerminal />
                </AboutMainMenuActive>
                <AboutMainMenuActive to={"/about/personal-info"}>
                  <RiInformationFill />
                </AboutMainMenuActive>
                <AboutMainMenuActive to={"/about/hobbies"}>
                  <RiGamepadFill />
                </AboutMainMenuActive>
              </div>
            </div>
            <div className=" flex">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="col-span-4 border-p4 h-full text-s1  mr-6 border-r">
          rer
        </div>
      </div>
    </>
  );
};

export default About;
