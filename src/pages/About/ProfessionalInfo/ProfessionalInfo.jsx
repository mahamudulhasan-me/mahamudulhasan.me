import { useState } from "react";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiCloseFill,
} from "react-icons/ri";
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

  const code = `
/**
  * About me
  * I have 5 years of еxperience in web
  * development lorem ipsum dolor sit amet, 
  * consectetur adipiscing elit, sed do eiusmod
  * tempor incididunt ut labore et dolore
  * magna aliqua. Ut enim ad minim veniam,
  * quis nostrud exercitation ullamco laboris
  * nisi ut aliquip ex ea commodo consequat.
  * Duis aute irure dolor in reprehenderit in
  *
  * Duis aute irure dolor in reprehenderit in
  * voluptate velit esse cillum dolore eu fugiat 
  * nulla pariatur. Excepteur sint occaecat 
  * officia deserunt mollit anim id est laborum.
*/
  `;

  const customTheme = {
    background: "transparent",
    fontSize: "18px",
    margin: 0,
  };
  return (
    <>
      <div className="min-w-[31%] border-r border-p4 h-full flex justify-start text-s1">
        <div className="w-full">
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
        </div>
      </div>
      <div className=" text-s1 w-[calc(100%-15rem)]">
        <div className={`border-b  border-p4 w-full h-10`}>
          <span className="border-r border-p4  h-full flex gap-1 items-center px-3 cursor-pointer w-2/5">
            professional-info <RiCloseFill size={20} />
          </span>
        </div>
        <div className="px-3 w-full">
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
      </div>
    </>
  );
};

export default ProfessionalInfo;
