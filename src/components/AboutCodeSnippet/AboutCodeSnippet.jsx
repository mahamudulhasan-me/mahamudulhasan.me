import { RiStarFill } from "react-icons/ri";
import { VscOctoface } from "react-icons/vsc";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const AboutCodeSnippet = ({ children }) => {
  const customTheme = {
    background: "transparent",
    width: "100%",
    fontSize: "14px",
  };
  return (
    <div className="w-full overflow-auto">
      <div className="flex justify-between items-center ">
        <div className="flex justify-center items-center gap-2">
          <img
            className="w-9 h-9 rounded-full"
            src="https://source.unsplash.com/100x100/?portrait"
            alt=""
          />
          <span className="">
            <p className="text-s3 font-semibold text-lg">@mahamudulhasan-me</p>
            <p className="text-s1">Created 5 months ago</p>
          </span>
        </div>
        <div className="text-s1 md:flex justify-center items-center gap-4">
          <span className="flex justify-center items-center gap-1">
            <VscOctoface size={24} />{" "}
            <Link className="hover:text-white transition-all">details</Link>
          </span>
          <span className="flex justify-center items-center gap-1">
            <RiStarFill size={24} /> 3 starts
          </span>
        </div>
      </div>
      <div className="bg-p3 border border-p4 rounded-xl py-2 mt-3 ">
        <SyntaxHighlighter
          language="javascript"
          showLineNumbers
          customStyle={customTheme}
          style={gradientDark}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default AboutCodeSnippet;
