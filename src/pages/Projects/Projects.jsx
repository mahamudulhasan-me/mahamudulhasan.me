/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BsFillBootstrapFill } from "react-icons/bs";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiCloseFill,
  RiCss3Fill,
  RiHtml5Fill,
  RiReactjsFill,
  RiStackFill,
} from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";

import Project from "./Project";

const Projects = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [projects, setProjects] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    filterProjects();
  }, [selectedCategories]);

  const fetchProjects = async () => {
    try {
      const response = await fetch("./projectsData.json");
      const data = await response.json();
      setProjects(data);
      setFilteredProjects(data);
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };

  const filterProjects = () => {
    if (selectedCategories.length > 0) {
      const filtered = projects.filter((project) =>
        project.category.some((category) =>
          selectedCategories.includes(category)
        )
      );
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects(projects);
    }
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCategories((prevSelectedCategories) => {
      if (checked) {
        return [...prevSelectedCategories, value];
      } else {
        return prevSelectedCategories.filter((category) => category !== value);
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Projects | Mahamudul Hasan</title>
      </Helmet>
      <div className="lg:h-full w-full text-s1 lg:flex">
        <div className="min-w-[21%] h-full border-r border-p4 ">
          <div
            data-aos="fade-down"
            onClick={() => setShowInfo(!showInfo)}
            className={`${
              showInfo ? "text-white" : ""
            } pl-4 border-b border-p4 w-full h-10 flex gap-1 items-center px-3 cursor-pointer`}
          >
            {showInfo ? (
              <RiArrowDownSFill size={24} />
            ) : (
              <RiArrowRightSFill size={24} />
            )}
            projects
          </div>
          {showInfo ? (
            <div
              data-aos="zoom-in"
              className={`pl-5 px-3 mt-4 space-y-4 category border-b lg:border-b-0 border-p4 pb-5`}
            >
              <p className="flex gap-3 items-center text-lg">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  value="html"
                />
                <RiHtml5Fill size={28} /> <label htmlFor="html">HTML</label>
              </p>
              <p className="flex gap-3 items-center text-lg">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  value="css"
                />
                <RiCss3Fill size={28} /> <label htmlFor="css">CSS</label>
              </p>
              <p className="flex gap-3 items-center text-lg">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  value="bootstrap"
                />
                <BsFillBootstrapFill size={28} />{" "}
                <label htmlFor="bootstrap">Bootstrap</label>
              </p>
              <p className="flex gap-3 items-center text-lg">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  value="tailwind"
                />
                <SiTailwindcss size={28} />{" "}
                <label htmlFor="tailwind">Tailwind</label>
              </p>
              <p className="flex gap-3 items-center text-lg">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  value="react"
                />
                <RiReactjsFill size={28} /> <label htmlFor="react">React</label>
              </p>
              <p className="flex gap-3 items-center text-lg">
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  value="fullStack"
                />
                <RiStackFill size={28} />{" "}
                <label htmlFor="fullStack">Full Stack</label>
              </p>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="lg:w-[calc(100vw-19rem)] text-s1  lg:pb-0 pb-20">
          <div className={`border-b  border-p4 w-full h-10`}>
            <span className="border-r border-p4  h-full flex gap-1 items-center px-3 cursor-pointer w-fit">
              projects-
              {selectedCategories.length === 0
                ? "All"
                : selectedCategories.map((item) => item + ",")}
              <RiCloseFill size={20} />
            </span>
          </div>
          <div className="border-r border-p4  md:mr-6 min-h-[calc(100%-40px)]">
            <div className="lg:pt-20 pt-10  lg:px-10 px-5  md:grid grid-cols-3 gap-5 lg:space-y-6 space-y-6">
              {filteredProjects.reverse().map((project) => (
                <Project key={project._id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
