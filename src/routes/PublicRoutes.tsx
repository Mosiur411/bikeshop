import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";


const PublicRoutes = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicRoutes;
