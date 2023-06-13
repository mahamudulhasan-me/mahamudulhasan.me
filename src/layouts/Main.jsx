import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="h-[calc(100vh-2px)]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
