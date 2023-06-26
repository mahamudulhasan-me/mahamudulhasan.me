/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiCloseFill,
} from "react-icons/ri";
import Sticky from "react-stickynode";
import CommentSyntaxHighlighter from "../../../components/AboutCodeSnippet/CommentSyntaxHighlighter";
import NavBio from "../../../components/AboutInfoNav/NavBio";
import NavContact from "../../../components/AboutInfoNav/NavContact";
import NavEducation from "../../../components/AboutInfoNav/NavEducation";
import NavInterested from "../../../components/AboutInfoNav/NavInterested";
import Education from "./Education";
const PersonalInfo = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("education");
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
  const bio = ` /**
  * I'm an accomplished MERN stack developer
  * with a proven track record of creating
  * exceptional web applications. With 
  * expertise in React, Node.js, and Express.js,
  * 
  * I bring a unique blend of technical
  * skills and a keen eye for detail to
  * every project. With 1 year of industry
 * experience, I have successfully delivered
 * cutting-edge solutions that exceed client
 * expectations. Continuously staying abreast
 * of the latest trends and technologies,
 * 
 * I thrive on solving challenges and
 * creating seamless user experiences.
 * Collaborate with me to bring your vision
 * to life and achieve extraordinary results."
 */
  `;
  const responsiveBio = (
    <>
      <p className="mb-3">
        <span className="text-white">//personal-info</span> / bio
      </p>
      I&apos;m an accomplished MERN stack developer with a proven track record
      of creating exceptional web applications. With expertise in React,
      Node.js, and Express.js, <br /> I bring a unique blend of technical skills
      and a keen eye for detail to every project. With 1 year of industry
      experience. <br />
      <br /> I have successfully delivered cutting-edge solutions that exceed
      client expectations. Continuously staying abreast of the latest trends and
      technologies. <br /> I thrive on solving challenges and creating seamless
      user experiences. Collaborate with me to bring your vision to life and
      achieve extraordinary results.
    </>
  );
  const interested = `
  * As a web developer,
  * I have a keen interest in emerging
  * technologies and innovative web 
  * solutions. 
  * I'm passionate about creating seamless
  * user experiences and leveraging the 
  * power of web development to bring 
  * ideas to life. Constantly learning
  * and exploring new trends, I thrive
  * on the dynamic nature of the web 
  * development industry. Let's collaborate
  * and build extraordinary digital
  * experiences together.
  */`;
  const responsiveInterested = (
    <>
      <p className="mb-3">
        <span className="text-white">//personal-info</span> / interested
      </p>
      As a web developer, I have a keen interest in emerging technologies and
      innovative web solutions. <br /> I&apos;m passionate about creating
      seamless user experiences and leveraging the power of web development to
      bring ideas to life. Constantly learning and exploring new trends. <br />{" "}
      I thrive on the dynamic nature of the web development industry. Let&apos;s
      collaborate and build extraordinary digital experiences together.
    </>
  );
  return (
    <>
      <div className="min-w-[31%] border-r border-p4 h-full flex justify-start text-s1">
        <div className="w-full">
          <Sticky enabled top={topValue}>
            <div
              data-aos="fade-right"
              onClick={() => setShowInfo(!showInfo)}
              className={`${
                showInfo ? "text-white" : "md:text-s1"
              } border-b border-p4  w-full h-10 flex gap-1 items-center px-3 cursor-pointer lg:bg-transparent bg-p4 text-white`}
            >
              {showInfo ? (
                <RiArrowDownSFill size={24} />
              ) : (
                <RiArrowRightSFill size={24} />
              )}{" "}
              Personal Info
            </div>

            {showInfo ? (
              <div
                data-aos="zoom-in"
                className={`pl-10 pt-4 space-y-4 border-l border-p4 md:border-l-0`}
              >
                <NavEducation
                  setSelectedMenu={setSelectedMenu}
                  selectedMenu={selectedMenu}
                />
                <NavBio
                  setSelectedMenu={setSelectedMenu}
                  selectedMenu={selectedMenu}
                />
                {/* interested nav  */}
                <NavInterested
                  setSelectedMenu={setSelectedMenu}
                  selectedMenu={selectedMenu}
                />
                {/* education  */}
              </div>
            ) : (
              ""
            )}

            <NavContact />
          </Sticky>
        </div>
      </div>
      <div className="text-s1 lg:w-[calc(100%-14rem)] h-full">
        <Sticky enabled top={topValue}>
          <div
            className={`md:border-b  border md:border-0 bg-p2  border-p4 w-full h-10 lg:block hidden`}
          >
            <span className="border-r bg-p2 border-p4  h-full flex gap-1 items-center px-3 cursor-pointer w-fit">
              Personal Info <RiCloseFill size={20} />
            </span>
          </div>

          <div className="px-3 my-5">
            {selectedMenu === "education" && <Education />}
            {selectedMenu === "bio" && (
              <CommentSyntaxHighlighter responsiveContent={responsiveBio}>
                {bio}
              </CommentSyntaxHighlighter>
            )}

            {selectedMenu === "interested" && (
              <CommentSyntaxHighlighter
                responsiveContent={responsiveInterested}
              >
                {interested}
              </CommentSyntaxHighlighter>
            )}
          </div>
        </Sticky>
      </div>
    </>
  );
};

export default PersonalInfo;
