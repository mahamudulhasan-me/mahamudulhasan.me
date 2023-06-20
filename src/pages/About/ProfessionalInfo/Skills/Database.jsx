import { RiDatabase2Fill } from "react-icons/ri";
import mongodb from "../../../../assets/images/skills/MongoDB.png";
import mysql from "../../../../assets/images/skills/MySQL.png";

const Database = () => {
  return (
    <div className="md:m-10 ">
      <p className="mb-3 lg:hidden block">
        <span className="text-white">//professional-info</span> / skills
      </p>
      <h2 className="text-2xl  mb-5  flex">
        <RiDatabase2Fill />
        _database
      </h2>
      <div className="flex gap-10">
        <figure className="text-center">
          <img src={mysql} alt="MySQL" className="w-32" />
          <p>MySQL</p>
        </figure>
        <figure className="text-center">
          <img src={mongodb} alt="mongodb" className="w-32" />
          <p>MongoDB</p>
        </figure>
      </div>
    </div>
  );
};

export default Database;
