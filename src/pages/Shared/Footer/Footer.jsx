import { RiFacebookFill, RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-12 border-y bg-p2 border-p4 px-6 flex lg:justify-between items-center text-s1 ">
      <div className="border-r border-p4 h-full flex justify-start items-center transition-all">
        find me in:
        <Link
          target="_blank"
          to={"https://www.linkedin.com/in/mahamudulhasan-me/"}
          className="ml-5 w-14 hover:text-white border-x h-full border-p4 flex justify-center items-center"
        >
          <RiLinkedinFill size={24} />
        </Link>
        <Link
          target="_blank"
          to={"https://www.facebook.com/mahamudulhasan.me"}
          className="w-14  h-full hover:text-white border-p4 flex justify-center items-center"
        >
          <RiFacebookFill size={24} />
        </Link>
      </div>
      <small className="text-xs hidden lg:block">
        design-inspired by Yanka
      </small>
      <div
        className="min-w-2/12 lg:border-l lg:border-r-0 lg:pr-0 pl-5 h-full flex justify-end items-center border-p4 border-r pr-5
      "
      >
        <Link className="flex justify-end items-center gap-2 transition-all">
          <span className="hover:text-s3 hidden lg:block">
            @mahamudulhasan-me
          </span>
          <RiGithubFill size={24} className="hover:text-white" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
