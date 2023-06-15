import { FaReact } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import nextjs from "../../../../assets/images/skills/Next.js.png";
import tailwind from "../../../../assets/images/skills/Tailwind CSS.png";
import bootstrap from "../../../../assets/images/skills/bootstrap.png";
import css from "../../../../assets/images/skills/css-3.png";
import html from "../../../../assets/images/skills/html-5.png";
import js from "../../../../assets/images/skills/js.png";
import react from "../../../../assets/images/skills/physics.png";

const FrontEnd = () => {
  return (
    <div className="p-10">
      <>
        <h2 className="text-2xl text-s3 mb-5 underline decoration-dashed flex items-center">
          <SiFrontendmentor /> _front-end skills
        </h2>
        <div className="flex gap-10">
          <figure className="text-center">
            <img src={html} alt="html5" />
            <p className="text-lg">HTML</p>
          </figure>
          <figure className="text-center">
            <img src={css} alt="css3" />
            <p className="text-lg">CSS</p>
          </figure>
          <figure>
            <img src={bootstrap} alt="bootstrap" />
            <p className="text-lg">Bootstrap</p>
          </figure>
          <figure>
            <img src={tailwind} alt="tailwind" className="w-16" />
            <p className="text-lg">Tailwind</p>
          </figure>
        </div>
      </>

      <>
        <h2 className="text-2xl text-s3 mb-5 mt-7 underline decoration-dashed flex items-center">
          <FaReact /> _language & libraries
        </h2>
        <div className="flex gap-10">
          <figure>
            <img src={js} alt="javascript" />
            <p className="text-lg">JavaScript</p>
          </figure>
          <figure className="text-center">
            <img src={react} alt="react" />
            <p className="text-lg">React.js</p>
          </figure>
          <figure>
            <img src={nextjs} alt="nextjs" className="w-16" />
            <p className="text-lg">Next.js</p>
          </figure>
        </div>
      </>
    </div>
  );
};

export default FrontEnd;
