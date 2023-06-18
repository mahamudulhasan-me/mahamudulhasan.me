import { useState } from "react";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiCloseFill,
} from "react-icons/ri";
import Sticky from "react-stickynode";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atelierLakesideDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
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

  const code = ` /**
  * About me
  * I'm a passionate MERN stack developer
  * with 1 year of experience. I specialize
  * in crafting top-notch web applications
  * that blend cutting-edge technology with
  * seamless user experiences. From front-end
  * magic with React to robust server-side
  * solutions with Node.js and Express.js,
 * I bring your ideas to life with pixel-
 * perfect precision. I thrive on challenges,
 * possess a meticulous eye for detail,
 * and constantly stay ahead of the curve
 * in the ever-evolving tech landscape.
 * Let's collaborate and create something
 * extraordinary together!"
 */`;

  const customTheme = {
    background: "transparent",
    fontSize: "18px",
    // margin: 0,
  };
  return (
    <>
      <div className="min-w-[31%]  border-r border-p4 h-full flex justify-start text-s1">
        <div className="w-full">
          <Sticky enabled top={56}>
            <div
              data-aos="fade-down"
              onClick={() => setShowInfo(!showInfo)}
              className={`${
                showInfo ? "text-white" : ""
              } border-b border-p4 w-full h-10 flex gap-1 items-center px-3 cursor-pointer`}
            >
              {showInfo ? (
                <RiArrowDownSFill size={24} />
              ) : (
                <RiArrowRightSFill size={24} />
              )}
              professional-info
            </div>

            {showInfo ? (
              <div data-aos="zoom-in" className={`px-3 mt-4 space-y-4 `}>
                {/* skill nav  */}
                <NavSkills selectedStatus={setSelectedMenu} />
                {/* experience nav  */}
                <NavExperience selectedStatus={setSelectedMenu} />
              </div>
            ) : (
              ""
            )}

            <NavContact />
          </Sticky>
        </div>
      </div>
      <div className=" text-s1 w-[calc(100%-15rem)]">
        <Sticky enabled top={56} innerClass="w-full">
          <div className={`border-b  border-p4 w-full h-10`}>
            <span className="border-r border-p4  h-full flex gap-1 items-center px-3 cursor-pointer w-2/5">
              professional-info <RiCloseFill size={20} />
            </span>
          </div>
          <div className="px-3 mt-5 w-full">
            {selectedMenu === "about-me" && (
              <article>
                <SyntaxHighlighter
                  language="javascript"
                  style={atelierLakesideDark}
                  customStyle={customTheme}
                  showLineNumbers
                >
                  {code}
                </SyntaxHighlighter>
              </article>
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
