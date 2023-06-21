import { FaGitAlt, FaPython } from "react-icons/fa";
import { RiGithubFill, RiToolsFill } from "react-icons/ri";
import axios from "../../../../assets/images/skills/Azios.png";
import django from "../../../../assets/images/skills/Django.png";
import figma from "../../../../assets/images/skills/Figma.png";
import git from "../../../../assets/images/skills/Git.png";
import python from "../../../../assets/images/skills/Python.png";
import reactQuery from "../../../../assets/images/skills/react-query-seeklogo.com.svg";
import reactRouter from "../../../../assets/images/skills/react-router.256x140.png";

const OtherSkills = () => {
  return (
    // other skill scetion
    <div className="md:px-10  block z-50">
      <p className="mb-3 lg:hidden">
        <span className="text-white">//professional-info</span> / skills
      </p>
      {/* git and github  */}
      <h2 className="text-2xl  mb-5  flex items-center">
        <FaGitAlt /> _git
      </h2>
      <div className="flex gap-10">
        <figure className="text-center">
          <img src={git} alt="git" className="w-16" />
          <p>git</p>
        </figure>
        <figure className="text-center">
          {/* <img src={github} alt="github" className="w-16" /> */}
          <RiGithubFill size={64} />
          <p>github</p>
        </figure>
      </div>
      <h2 className=" text-2xl  mb-4  flex items-center mt-10">
        <RiToolsFill /> _different tools
      </h2>
      <div className="flex  items-center justify-between">
        <figure>
          <img src={reactRouter} alt="react-router" className="w-28" />
          <p>react-router</p>
        </figure>
        <figure className="text-center">
          <img src={axios} alt="axios" className="w-16" />
          <p>axios</p>
        </figure>
        <figure className="text-center">
          <img
            src={reactQuery}
            alt="react-query/tanStack-Query"
            className="w-16"
          />
          <p>react-query</p>
        </figure>
        <figure className="text-center">
          <img src={figma} alt="figma" className="w-16" />
          <p>figma</p>
        </figure>
      </div>
      <h2 className="text-2xl mt-10 mb-4  flex items-center">
        <FaPython /> _other language
      </h2>
      <div className="flex gap-10 items-center">
        <figure>
          <img src={python} alt="python" className="w-16" />
          <p>Python</p>
        </figure>
        <figure className="text-center">
          <img src={django} alt="django" className="w-16" />
          <p>Django</p>
        </figure>
      </div>
    </div>
  );
};

export default OtherSkills;
