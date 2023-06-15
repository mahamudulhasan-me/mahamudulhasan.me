import { FaGitAlt, FaPython } from "react-icons/fa";
import { RiToolsFill } from "react-icons/ri";
import axios from "../../../../assets/images/skills/Azios.png";
import django from "../../../../assets/images/skills/Django.png";
import figma from "../../../../assets/images/skills/Figma.png";
import git from "../../../../assets/images/skills/Git.png";
import github from "../../../../assets/images/skills/GitHub.png";
import python from "../../../../assets/images/skills/Python.png";
import reactQuery from "../../../../assets/images/skills/react-query-seeklogo.com.svg";
import reactRouter from "../../../../assets/images/skills/react-router.256x140.png";

const OtherSkills = () => {
  return (
    // other skill scetion
    <div className="p-10">
      {/* git and github  */}
      <h2 className="text-2xl text-s3 mb-5 underline decoration-dashed flex items-center">
        <FaGitAlt /> _git
      </h2>
      <div className="flex gap-10">
        <figure className="text-center">
          <img src={git} alt="" className="w-16" />
          <p className="text-lg">git</p>
        </figure>
        <figure className="text-center">
          <img src={github} alt="" className="w-16" />
          <p className="text-lg">github</p>
        </figure>
      </div>

      <h2 className="text-s3 text-2xl mt-5 mb-3 underline decoration-dashed flex items-center">
        <RiToolsFill /> _different tools
      </h2>
      <div className="flex gap-10 items-center">
        <figure>
          <img src={reactRouter} alt="" className="w-28" />
          <p className="text-lg">React-router</p>
        </figure>
        <figure className="text-center">
          <img src={axios} alt="" className="w-16" />
          <p className="text-lg">Axios</p>
        </figure>
        <figure className="text-center">
          <img src={reactQuery} alt="" className="w-16" />
          <p className="text-lg">React-query</p>
        </figure>
        <figure className="text-center">
          <img src={figma} alt="" className="w-16" />
          <p className="text-lg">Figma</p>
        </figure>
      </div>
      <h2 className="text-s3 text-2xl mt-5 mb-3 underline decoration-dashed flex items-center">
        <FaPython /> _other language
      </h2>
      <div className="flex gap-10 items-center">
        <figure>
          <img src={python} alt="" className="w-16" />
          <p className="text-lg">Python</p>
        </figure>
        <figure className="text-center">
          <img src={django} alt="" className="w-16" />
          <p className="text-lg">Django</p>
        </figure>
      </div>
    </div>
  );
};

export default OtherSkills;
