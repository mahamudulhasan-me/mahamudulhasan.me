import React, { useState } from "react";
import {
  RiArrowDownSFill,
  RiArrowLeftSFill,
  RiArrowRightSFill,
  RiArrowUpSFill,
} from "react-icons/ri";

function ArrowKeyButtons() {
  const [upActive, setUpActive] = useState(false);
  const [downActive, setDownActive] = useState(false);
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);
  //   setPlayGame(true);

  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case 37: // Left arrow key
        setLeftActive(true);

        break;
      case 38: // Up arrow key
        setUpActive(true);

        break;
      case 39: // Right arrow key
        setRightActive(true);

        break;
      case 40: // Down arrow key
        setDownActive(true);

        break;
      default:
        break;
    }
  };

  const handleKeyUp = (event) => {
    switch (event.keyCode) {
      case 37: // Left arrow key
        setLeftActive(false);
        break;
      case 38: // Up arrow key
        setUpActive(false);
        break;
      case 39: // Right arrow key
        setRightActive(false);
        break;
      case 40: // Down arrow key
        setDownActive(false);
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    // <div>
    <>
      <div className={`${upActive ? "arrow-btn border" : "arrow-btn"}`}>
        <RiArrowUpSFill />
      </div>
      <div className="flex justify-evenly items-center mt-1">
        <div className={`${leftActive ? "arrow-btn border" : "arrow-btn"}`}>
          <RiArrowLeftSFill />
        </div>
        <div className={`${downActive ? "arrow-btn border" : "arrow-btn"}`}>
          <RiArrowDownSFill />
        </div>
        <div className={`${rightActive ? "arrow-btn border" : "arrow-btn"}`}>
          <RiArrowRightSFill />
        </div>
      </div>
    </>
  );
}

export default ArrowKeyButtons;
