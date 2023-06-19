import { useState } from "react";
import bootstrap from "../../assets/images/skills/bootstrap.png";
import css from "../../assets/images/skills/css-3.png";
import html from "../../assets/images/skills/html-5.png";
import ModalProject from "./ModalProject";

const Project = ({ project }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { projectNo, name, image, category, description } = project;
  const imageTag = category[0];

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <p>
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
        <figure className="w-full h-36 rounded-t-2xl border-b border-p4 overflow-hidden">
          <img src={image} alt="" />
        </figure>

        <div className="mx-8">
          <p className="text-lg my-6  ">{description}</p>
          <button
            onClick={openModal}
            className="bg-[#1C2B3A] hover:bg-[#263B50] text-white px-4 py-3 rounded-lg mb-8 transition-all"
          >
            view-project
          </button>
          <ModalProject
            isOpen={isModalOpen}
            closeModal={closeModal}
            content={project}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
