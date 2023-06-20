import express from "../../../../assets/images/skills/Express.png";
import node from "../../../../assets/images/skills/Node.js.png";

const BackEnd = () => {
  return (
    <div className="md:m-10 ">
      <p className="mb-3 lg:hidden block">
        <span className="text-white">//professional-info</span> / skills
      </p>
      <h2 className="text-2xl mb-5 flex items-center">
        {`//_back-end skills`}
      </h2>
      <div className="flex gap-10">
        <figure className="text-center">
          <img src={node} alt="node.js" className="w-28" />
          <p>Node.js</p>
        </figure>
        <figure className="text-center">
          <img src={express} alt="express.js" className="w-28" />
          <p>Express.js</p>
        </figure>
      </div>
    </div>
  );
};

export default BackEnd;
