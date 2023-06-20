import { useState } from "react";
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
import Institute from "./Education/Institute";
import University from "./Education/University";
const PersonalInfo = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("bio");

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
      * I'm an accomplished MERN stack developer * with a proven track record of
      creating * exceptional web applications. With * expertise in React,
      Node.js, and Express.js, * * I bring a unique blend of technical * skills
      and a keen eye for detail to * every project. With 1 year of industry *
      experience, I have successfully delivered * cutting-edge solutions that
      exceed client * expectations. Continuously staying abreast * of the latest
      trends and technologies, * * I thrive on solving challenges and * creating
      seamless user experiences. * Collaborate with me to bring your vision * to
      life and achieve extraordinary results."
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
      * As a web developer, * I have a keen interest in emerging * technologies
      and innovative web * solutions. * I'm passionate about creating seamless *
      user experiences and leveraging the * power of web development to bring *
      ideas to life. Constantly learning * and exploring new trends, I thrive *
      on the dynamic nature of the web * development industry. Let's collaborate
      * and build extraordinary digital * experiences together.
    </>
  );
  return (
    <>
      <div className="min-w-[31%] border-r border-p4 h-full flex justify-start text-s1">
        <div className="w-full">
          <Sticky
            enabled
            top={56}
            innerActiveClass="max-lg:!static max-lg:!transform-none max-lg:!w-auto"
          >
            <div
              data-aos="fade-right"
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
              <div data-aos="zoom-in" className={`pl-10 mt-4 space-y-4 `}>
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
                <NavEducation selectedStatus={setSelectedMenu} />
              </div>
            ) : (
              ""
            )}

            <NavContact />
          </Sticky>
        </div>
      </div>
      <div className="text-s1 lg:w-[calc(100%-15rem)]">
        <Sticky enabled top={56}>
          <div className={`border-b bg-p2  border-p4 w-full h-10 z-40`}>
            <span className="border-r bg-p2 border-p4  h-full flex gap-1 items-center px-3 cursor-pointer w-fit">
              Personal Info <RiCloseFill size={20} />
            </span>
          </div>

          <div className="px-3 my-5">
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
            {selectedMenu === "institute" && <Institute />}
            {selectedMenu === "university" && <University />}
          </div>
        </Sticky>
      </div>
    </>
  );
};

export default PersonalInfo;
