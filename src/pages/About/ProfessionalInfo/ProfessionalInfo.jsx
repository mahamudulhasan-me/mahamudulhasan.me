/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiCloseFill,
} from "react-icons/ri";
import Sticky from "react-stickynode";
import CommentSyntaxHighlighter from "../../../components/AboutCodeSnippet/CommentSyntaxHighlighter";
import NavContact from "../../../components/AboutInfoNav/NavContact";

import NavExperience from "./Exprerience/NavExperience";
import Database from "./Skills/Database";
import NavSkills from "./Skills/NavSkills";
import OtherSkills from "./Skills/OtherSkills";
import BackEnd from "./Skills/backEnd";
import FrontEnd from "./Skills/frontEnd";

const ProfessionalInfo = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("about-me");
  const [topValue, setTopValue] = useState(57); // Default top value

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 600; // Define your mobile breakpoint here
      const newTopValue = isMobile ? 0 : 57; // Modify the top value based on device

      setTopValue(newTopValue);
    };

    handleResize(); // Set initial value

    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener
    };
  }, []);

  const code = ` /**
  * About me
  * I'm a passionate MERN stack developer
  * with 1 year of experience. I specialize
  * in crafting top-notch web applications
  * that blend cutting-edge technology with
  * seamless user experiences. From front-end
  * magic with React to robust server-side
  * solutions with Node.js and Express.js,
 * 
 * I bring your ideas to life with pixel-
 * perfect precision. I thrive on challenges,
 * possess a meticulous eye for detail,
 * and constantly stay ahead of the curve
 * in the ever-evolving tech landscape.
 * Let's collaborate and create something
 * extraordinary together!"
 */`;

  const responsiveAbout = (
    <>
      <p className="mb-3">
        <span className="text-white">//professional-info</span> / About me
      </p>
      I&apos;m a passionate MERN stack developer with 1 year of experience. I
      specialize in crafting top-notch web applications that blend cutting-edge
      technology with seamless user experiences. <br /> <br />
      From front-end magic with React to robust server-side solutions with
      Node.js and Express.js, I bring your ideas to life with pixel-magic with
      perfect precision. <br />I thrive on challenges, possess a meticulous eye
      for detail, and constantly stay ahead of the curve in the ever-evolving
      tech landscape. Let&apos;s collaborate and create something extraordinary
      together!
    </>
  );

  return (
    <>
      <div className="md:min-w-[31%]   border-r border-p4 min-h-1/2 md:h-full flex flex-col  text-s1 justify-between">
        <Sticky enabled top={topValue}>
          <div className="w-full">
            {/* professional 2nd nav var with sticky  */}
            <div
              data-aos="fade-down"
              onClick={() => setShowInfo(!showInfo)}
              className={`${
                showInfo ? "text-white" : "md:text-s1"
              } border-b border-p4 w-full h-10 flex gap-1 items-center px-3 cursor-pointer lg:bg-transparent bg-p4 text-white `}
            >
              {showInfo ? (
                <RiArrowDownSFill size={24} />
              ) : (
                <RiArrowRightSFill size={24} />
              )}
              professional-info
            </div>

            {showInfo ? (
              <div
                data-aos="zoom-in"
                className={`px-3 mt-4 border-p4 space-y-4 z-20 border-l md:border-l-0 `}
              >
                {/* skill nav  */}
                <NavSkills selectedStatus={setSelectedMenu} />
                {/* experience nav  */}
                <NavExperience selectedStatus={setSelectedMenu} />
              </div>
            ) : (
              ""
            )}
            <NavContact />
          </div>
        </Sticky>
      </div>
      <div className=" text-s1 lg:w-[calc(100%-14rem)]  h-full">
        <Sticky enabled top={topValue}>
          <div
            className={`lg:border-b border lg:border-0  bg-p2 border-p4 w-full h-10 hidden md:block`}
          >
            <span className="border-r border-p4  h-full w-fit flex gap-1 items-center px-3 cursor-pointer">
              professional-info <RiCloseFill size={20} />
            </span>
          </div>

          <div className="md:px-3 mt-5  h-full">
            {selectedMenu === "about-me" && (
              <CommentSyntaxHighlighter responsiveContent={responsiveAbout}>
                {code}
              </CommentSyntaxHighlighter>
            )}
            {selectedMenu === "front-end" && <FrontEnd />}
            {selectedMenu === "back-end" && <BackEnd />}
            {selectedMenu === "database" && <Database />}
            {selectedMenu === "other-skills" && <OtherSkills />}
          </div>
        </Sticky>
      </div>
    </>
  );
};

export default ProfessionalInfo;
