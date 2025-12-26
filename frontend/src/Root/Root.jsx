import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Root = () => {
    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;