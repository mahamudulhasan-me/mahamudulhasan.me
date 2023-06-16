/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
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
import react from "../../assets/images/skills/physics.png";

const Projects = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);

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
  console.log(selectedCategories);
  // useEffect(() => {
  //   selectedCategories.forEach((category) => {
  //     // Perform API call for each selected category
  //     fetch(`https://api.example.com/projects?category=${category}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // Process the API response data for each category
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         // Handle any errors
  //         console.error(error);
  //       });
  //   });
  // }, [selectedCategories]);
  return (
    <>
      <Helmet>
        <title>Projects | Mahamudul Hasan</title>
      </Helmet>
      <div className="h-full w-full text-s1 flex">
        <div className="w-[19.43rem] h-full border-r border-p4 ">
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
              className={`pl-5 px-3 mt-4 space-y-4 category`}
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

        <div className="w-[calc(100vw-19rem)] text-s1">
          <div className={`border-b  border-p4 w-full h-10`}>
            <span className="border-r border-p4  h-full flex gap-1 items-center px-3 cursor-pointer w-fit">
              projects-{selectedCategories.map((item) => item + ",")}
              <RiCloseFill size={20} />
            </span>
          </div>
          <div className="border-r border-p4  mr-6 h-[calc(100%-40px)]">
            <div className="pt-20 pl-10  grid grid-cols-3">
              <div className="w-[23rem]">
                <p>
                  <span className="font-semibold text-s3">Project 1</span>{" "}
                  <span>//_ui-animation</span>
                </p>
                <div className="relative rounded-2xl border border-p4">
                  <img
                    src={react}
                    alt=""
                    className="absolute w-10 right-4 top-4"
                  />
                  <img
                    src=""
                    alt=""
                    className="w-full h-36 rounded-t-2xl border-b border-p4"
                  />
                  <div className="mx-8">
                    <p className="text-lg my-6  ">
                      Duis aute irure dolor in velit esse cillum dolore.
                    </p>
                    <button className="bg-[#1C2B3A] hover:bg-[#263B50] text-white px-4 py-3 rounded-lg mb-8 transition-all">
                      view-project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
