import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 h-12 border-t border-p4 px-6 flex justify-between items-center text-s1 text-lg">
      <div className="border-r border-p4 h-full flex justify-start items-center">
        find me in:
        <RiLinkedinBoxFill />
        <RiFacebookBoxFill />
      </div>
      <div
        className="w-2/12 border-l h-full flex justify-end items-center border-p4
      "
      >
        <Link className="flex justify-end items-center gap-2 transition-all">
          <span className="hover:text-s3">@mahamudulhasan-me</span>
          <RiGithubFill size={24} className="hover:text-white " />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
