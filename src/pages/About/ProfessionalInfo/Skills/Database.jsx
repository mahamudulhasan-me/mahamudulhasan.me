import { RiDatabase2Fill } from "react-icons/ri";
import mongodb from "../../../../assets/images/skills/MongoDB.png";
import mysql from "../../../../assets/images/skills/MySQL.png";

const Database = () => {
  return (
    <div className="m-10 ">
      <h2 className="text-2xl text-s3 mb-5  flex underline decoration-dashed">
        <RiDatabase2Fill />
        _database
      </h2>
      <div className="flex gap-10">
        <figure className="text-center">
          <img src={mysql} alt="" className="w-32" />
          <p className="text-lg">MySQL</p>
        </figure>
        <figure className="text-center">
          <img src={mongodb} alt="" className="w-32" />
          <p className="text-lg">MongoDB</p>
        </figure>
      </div>
    </div>
  );
};

export default Database;
