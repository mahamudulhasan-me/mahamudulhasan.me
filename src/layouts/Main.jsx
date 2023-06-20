import Aos from "aos";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import "./Styles.css";

const Main = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="min-h-[calc(100vh-2px)] content-container">
      <Navbar />
      <div className="h-[calc(100vh-4rem)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
