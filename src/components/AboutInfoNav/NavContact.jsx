import { useState } from "react";
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiMailFill,
  RiPhoneFill,
} from "react-icons/ri";

const NavContact = () => {
  const [showInfo, setShowInfo] = useState(false);
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
      <div>
        <div
          data-aos="fade-down"
          onClick={() => setShowInfo(!showInfo)}
          className="border lg:border-y mt-3 border-p4 w-full h-10 flex gap-1 items-center px-3 cursor-pointer"
        >
          {showInfo ? (
            <RiArrowDownSFill size={24} />
          ) : (
            <RiArrowRightSFill size={24} />
          )}{" "}
          contacts
        </div>

        {showInfo ? (
          <div
            data-aos="zoom-in"
            className={`border-l md:border-l-0 border-p4 px-3 mt-4 space-y-4 `}
          >
            <p className="flex items-center gap-2 ">
              <RiMailFill size={20} />{" "}
              <span
                className="hover:text-white hover:underline "
                onClick={composeEmail}
              >
                send email
              </span>
            </p>
            <span className="text-xs">mahamudulhasan.org@gmail.com</span>
            <p className="flex items-center gap-2 ">
              <RiPhoneFill size={20} />{" "}
              <span className="hover:text-white hover:underline ">
                +8801710142370 <br />
                +8801511242370
              </span>
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default NavContact;
