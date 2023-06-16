import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-4/5  mx-auto flex justify-center items-center h-full gap-10">
      <div className="">
        <div className="text-[#E5E9F0]">
          <p className="text-lg ">Hi all. I am</p>
          <h1 className="text-6xl">Mahamudul Hasan</h1>
          <h3 className="text-s3 text-3xl">
            {"<"}Web Application Developer{"/>"}
          </h3>
        </div>
        <div className="mt-20">
          <p className="text-s1">{"// complete the game to continue"}</p>
          <p className="text-s1">
            {"// you can also see it on my Github page"}
          </p>
          <p>
            <span className="text-s3">const</span>{" "}
            <span className="text-a2">githubLink</span>{" "}
            <span className="text-white"> = </span>
            <span className="text-a3">
              “
              <Link className="underline ">https://github.com/example/url</Link>
              ”
            </span>
          </p>
        </div>
      </div>
      <div className="relative h-full flex justify-start items-center">
        <div
          className="rounded-lg border-2 border-[#010e0e] flex justify-center items-center"
          style={{
            width: "475px",
            height: "475px",
            background:
              "linear-gradient(150.26deg, rgba(23, 85, 83, 0.7) 1.7%, rgba(67, 217, 173, 0.091) 81.82%)",
            boxShadow: "inset 0px 2px 0px rgba(255, 255, 255, 0.3)",
            backdropFilter: "blur(32px)",
          }}
        >
          <h1 className="text-white text-3xl">Snake Game coming soooon!</h1>
        </div>
        <div className="absolute w-96 h-80 bg-a2 top-[20%] left-[10%] opacity-40 rotate-[20deg] blur-[87px] "></div>
        <div className="absolute bg-a2 w-40 rounded-3xl h-64 top-5 -left-5 rotate-[-35deg] opacity-40 blur-[87px] "></div>
        <div className="absolute w-80 h-[450px] bg-s3 bottom-0 right-20 rotate-[75deg] blur-[85px]"></div>
      </div>
    </div>
  );
};

export default Home;
