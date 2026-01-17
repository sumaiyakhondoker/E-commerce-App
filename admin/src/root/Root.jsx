import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useContext} from "react";
import Login from "../components/Login";
import { AdminContext } from "../context/AdminContext";

export const backendUrl = import.meta.env.VITE_BACKEND_URL
const Root = () => {
      const {token} = useContext(AdminContext)
  return (
    <div className="bg-gray-50 min-h-screen">
      {token === "" ? (
        <Login></Login>
      ) : (
        <>
          <Navbar></Navbar>
          <hr className="text-gray-300" />
          <div className="flex w-full">
            <Sidebar></Sidebar>
            <div className="w-[70%] mx-auto my-8 ml-[max(5vw,25px)] text-gray-600 text-base">
              <Outlet></Outlet>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Root;
