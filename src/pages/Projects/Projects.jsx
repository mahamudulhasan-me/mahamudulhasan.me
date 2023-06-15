import { useState } from "react";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiCheckboxBlankLine,
  RiCheckboxFill,
  RiHtml5Fill,
} from "react-icons/ri";
import "./Styles.css";

const Projects = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [HTML, setHTML] = useState(null);
  return (
    <div className="grid grid-cols-12 h-full w-full text-s1">
      <div className="col-span-7 border-r border-p4 w-full h-full">
        <div className="h-full flex">
          <div className="w-full flex">
            <div className="w-[17.3rem] h-full border-r border-p4">
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
                projects
              </div>
              {showInfo ? (
                <div data-aos="zoom-in" className={`px-3 mt-4 space-y-4 `}>
                  <p className="flex items-center gap-3 text-lg">
                    {HTML ? (
                      <RiCheckboxFill
                        size={28}
                        className="mr-3"
                        onClick={() => setHTML(null)}
                      />
                    ) : (
                      <RiCheckboxBlankLine
                        size={28}
                        className="mr-3"
                        onClick={() => setHTML("html")}
                      />
                    )}
                    <RiHtml5Fill size={28} /> HTML
                  </p>
                  <p className="flex items-center gap-3 text-lg">
                    {HTML ? (
                      <RiCheckboxFill
                        size={28}
                        className="mr-3"
                        onClick={() => setCSS(null)}
                      />
                    ) : (
                      <RiCheckboxBlankLine
                        size={28}
                        className="mr-3"
                        onClick={() => setCSS("css")}
                      />
                    )}
                    <RiHtml5Fill size={28} /> CSS
                  </p>
                  <p className="flex items-center gap-3 text-lg">
                    {HTML ? (
                      <RiCheckboxFill
                        size={28}
                        className="mr-3"
                        onClick={() => setBootstrap(null)}
                      />
                    ) : (
                      <RiCheckboxBlankLine
                        size={28}
                        className="mr-3"
                        onClick={() => setBootstrap("bootstrap")}
                      />
                    )}
                    <RiHtml5Fill size={28} /> HTML
                  </p>
                  <p className="flex items-center gap-3 text-lg">
                    {HTML ? (
                      <RiCheckboxFill
                        size={28}
                        className="mr-3"
                        onClick={() => setHTML(null)}
                      />
                    ) : (
                      <RiCheckboxBlankLine
                        size={28}
                        className="mr-3"
                        onClick={() => setHTML("html")}
                      />
                    )}
                    <RiHtml5Fill size={28} /> HTML
                  </p>
                  <p className="flex items-center gap-3 text-lg">
                    {HTML ? (
                      <RiCheckboxFill
                        size={28}
                        className="mr-3"
                        onClick={() => setHTML(null)}
                      />
                    ) : (
                      <RiCheckboxBlankLine
                        size={28}
                        className="mr-3"
                        onClick={() => setHTML("html")}
                      />
                    )}
                    <RiHtml5Fill size={28} /> HTML
                  </p>
                  <p className="flex items-center gap-3 text-lg">
                    {HTML ? (
                      <RiCheckboxFill
                        size={28}
                        className="mr-3"
                        onClick={() => setHTML(null)}
                      />
                    ) : (
                      <RiCheckboxBlankLine
                        size={28}
                        className="mr-3"
                        onClick={() => setHTML("html")}
                      />
                    )}
                    <RiHtml5Fill size={28} /> HTML
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="w-30%"></div>
          </div>
        </div>
      </div>
      <div className="col-span-5 border-p4 w-full h-full text-s1"></div>
    </div>
  );
};

export default Projects;
