import { useState } from "react";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiMailFill,
  RiPhoneFill,
} from "react-icons/ri";

const ContactNumber = () => {
  const [showInfo, setShowInfo] = useState(true);
  const recipientEmail = "mahamudulhasan.org@gmail.com";
  const subject = "Hello from me";

  const composeEmail = () => {
    const gmailURL = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
      recipientEmail
    )}&su=${encodeURIComponent(subject)}`;
    window.open(gmailURL, "_blank");
  };
  return (
    <>
      <div
        data-aos="fade-right"
        onClick={() => setShowInfo(!showInfo)}
        className={`${
          showInfo ? "text-white" : "lg:text-s1"
        } pl-4 border-b border-p4 w-full h-10 flex gap-1 items-center px-3 cursor-pointer lg:bg-transparent bg-p4  text-white`}
      >
        {showInfo ? (
          <RiArrowDownSFill size={24} />
        ) : (
          <RiArrowRightSFill size={24} />
        )}
        contacts
      </div>
      {showInfo ? (
        <div data-aos="zoom-in" className={`px-3 my-4 space-y-4 `}>
          <p className="flex items-center  gap-2 ">
            <RiMailFill size={22} />{" "}
            <span
              title="Click to sent email"
              className="hover:text-white hover:underline lg:text-[15px] text-lg transition-all"
              onClick={composeEmail}
            >
              mahamudulhasan.org@gmail.com
            </span>
          </p>
          <span className="text-xs"></span>
          <p className="flex items-center gap-2 ">
            <RiPhoneFill size={20} />{" "}
            <span>
              <span className="hover:text-white  transition-all">
                +8801710142370
              </span>{" "}
              <br />
              <span className="hover:text-white  transition-all">
                +8801511242370
              </span>
            </span>
          </p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ContactNumber;
