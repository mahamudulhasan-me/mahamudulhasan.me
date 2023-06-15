import { SiExpress } from "react-icons/si";
import express from "../../../../assets/images/skills/Express.png";
import node from "../../../../assets/images/skills/Node.js.png";

const BackEnd = () => {
  return (
    <div className="m-10 ">
      <h2 className="text-2xl text-s3 mb-5 underline decoration-dashed flex items-center">
        <SiExpress /> _back-end skills
      </h2>
      <div className="flex gap-10">
        <figure className="text-center">
          <img src={node} alt="" className="w-32" />
          <p className="text-lg">Node.js</p>
        </figure>
        <figure className="text-center">
          <img src={express} alt="" className="w-32" />
          <p className="text-lg">Express.js</p>
        </figure>
      </div>
    </div>
  );
};

export default BackEnd;
