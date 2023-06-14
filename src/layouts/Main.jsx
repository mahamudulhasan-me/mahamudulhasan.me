import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="max-h-[calc(100vh-2px)]">
      <Navbar />
      <div className="h-[calc(100vh-3.6rem)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
