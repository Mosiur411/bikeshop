import { Outlet } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function App() {
  return (
   <div className="mx-auto max-w-[1350px]">
    <Navbar />
    <Outlet />
    <Footer />
   </div>
  )
}
