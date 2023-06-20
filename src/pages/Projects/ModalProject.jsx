import { MdViewInAr } from "react-icons/md";
import { RiCheckFill, RiCloseLine, RiCodeSSlashFill } from "react-icons/ri";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";
import bootstrap from "../../assets/images/skills/bootstrap.png";
import css from "../../assets/images/skills/css-3.png";
import html from "../../assets/images/skills/html-5.png";

const ModalProject = ({ isOpen, closeModal, content }) => {
  const {
    projectNo,
    name,
    image,
    category,
    liveLink,
    codeLink,
    description,
    technologies,
    features,
  } = content;
  const imageTag = category[0];
  if (!isOpen) {
    return null;
  }

  return (
    <div
      data-aos="zoom-out"
      className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-p2 bg-opacity-70"
    >
      <div className=" bg-opacity-70 md:w-1/2 relative py-10 rounded-xl">
        <span
          className="text-red-700 lg:top-10 top-5 right-10 absolute cursor-pointer z-50"
          onClick={closeModal}
        >
          <RiCloseLine size={40} />
        </span>

        <div data-aos="zoom-in" className="md:w-3/4 mx-auto">
          <p className="text-lg">
            <span className="font-semibold text-s3">{projectNo}</span>{" "}
            <span>{`//_${name}`}</span>
          </p>
          <div className="relative rounded-2xl border border-p4 bg-p3">
            <img
              src={
                (imageTag === "html" && html) ||
                (imageTag === "css" && css) ||
                (imageTag === "bootstrap" && bootstrap)
              }
              alt=""
              className="absolute w-10 right-4 top-4"
            />
            <figure className="w-full h-56 rounded-t-2xl border-b border-p4 overflow-hidden">
              <img src={image} alt="" className="h-full w-full" />
            </figure>

            <div className="mx-8">
              <p className="text-lg my-6  ">{description}</p>
              {/* technologies  */}
              <p className="text-lg font-semibold text-s3">Technologies:</p>
              <ul className="flex items-center gap-2">
                {technologies?.map((technology, index) => (
                  <li key={index} className="flex items-center">
                    <RxDotFilled /> {technology}
                  </li>
                ))}
              </ul>
              {/* project features */}
              <p className="text-lg font-semibold text-s3 mt-3">
                Technologies:
              </p>
              <ul>
                {features?.map((feature, index) => (
                  <li key={index} className="flex items-center gap-1">
                    <RiCheckFill /> {feature}
                  </li>
                ))}
              </ul>
              <div className="flex gap-2 mt-8">
                <Link
                  to={liveLink}
                  target="_blank"
                  className="bg-[#1C2B3A] hover:bg-[#263B50] text-white px-3 py-2 rounded-lg mb-8 transition-all flex justify-center items-center gap-2"
                >
                  <MdViewInAr size={24} /> preview
                </Link>
                <Link
                  to={codeLink}
                  target="_blank"
                  className="bg-[#1C2B3A] hover:bg-[#263B50] text-white px-2 py-1 rounded-lg mb-8 transition-all flex justify-center items-center gap-2"
                >
                  <RiCodeSSlashFill size={24} /> view-code
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
