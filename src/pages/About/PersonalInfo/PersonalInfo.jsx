import { useState } from "react";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiCloseFill,
} from "react-icons/ri";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atelierLakesideDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import NavBio from "../../../components/AboutInfoNav/NavBio";
import NavContact from "../../../components/AboutInfoNav/NavContact";
import NavEducation from "../../../components/AboutInfoNav/NavEducation";
import NavInterested from "../../../components/AboutInfoNav/NavInterested";
import Institute from "./Education/Institute";
import University from "./Education/University";
const PersonalInfo = () => {
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
  };
  return (
    <>
      <div className="w-[27.2%] border-r border-p4 h-full flex justify-start text-s1">
        <div className="w-full">
          <div>
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
              )}{" "}
              Personal Info
            </div>

            {showInfo ? (
              <div data-aos="zoom-in" className={`px-3 mt-4 space-y-4 `}>
                <NavBio />
                {/* interested nav  */}
                <NavInterested />
                <div>
                  {/* education  */}
                  <NavEducation selectedStatus={setSelectedMenu} />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <NavContact />
        </div>
      </div>
      <div className=" w-[73.4%] text-s1">
        <div className={`border-b  border-p4 w-full h-10`}>
          <span className="border-r border-p4  h-full flex gap-1 items-center px-3 cursor-pointer w-1/3">
            Personal Info <RiCloseFill size={20} />
          </span>
        </div>
        <div className="px-3">
          {selectedMenu === "about-me" && (
            <article className="bg-inherit">
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

          {selectedMenu === "institute" && <Institute />}
          {selectedMenu === "university" && <University />}
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
