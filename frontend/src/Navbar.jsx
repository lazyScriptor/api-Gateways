import React, { useState } from "react";
import { PiArticle } from "react-icons/pi";
import { IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import sltDigital from "./assets/slt-digital.png";

function Navbar() {
  const userType = localStorage.getItem("userType");
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-black bg-opacity-30 backdrop-blur-sm z-10">
      <div className="h-full bg-gradient-to-b from-[#007bf3] via-[#007bf3] to-[#007bf3]">
        <div className="h-16 w-full flex justify-between text-base mx-auto max-w-[1024px] px-4 items-center">
          <img className="h-12" src={sltDigital} alt="SLT-digital logo" />

          <ul className="hidden sm:flex hover:text-md text-white transition-all duration-600 w-[650px] justify-center gap-4">
            <li className="p-4" onClick={() => navigate("/hero")}>
              <button className="hover:text-lg hover:text-blue-200 transition-all duration-300">
                Home
              </button>
            </li>
            {userType === "admin" && (
              <li className="p-4" onClick={() => navigate("/attendance")}>
                <button className="hover:text-lg hover:text-blue-200 transition-all duration-300">
                  Approvals
                </button>
              </li>
            )}
            <li className="p-4" onClick={() => navigate("/shifts")}>
              <button className="hover:text-lg hover:text-blue-200 transition-all duration-300">
                Shifts
              </button>
            </li>
            <li className="p-4" onClick={() => navigate("/attendance-fe")}>
              <button className="hover:text-lg hover:text-blue-200 transition-all duration-300">
                Attendance
              </button>
            </li>
            <li className="p-4" onClick={() => navigate("/tailwind")}>
              <button className="hover:text-lg hover:text-blue-200 transition-all duration-300">
                Tailwind
              </button>
            </li>
            <li className="p-4" onClick={() => navigate("/ecom-web")}>
              <button className="hover:text-lg hover:text-blue-200 transition-all duration-300">
                ecom
              </button>
            </li>
            <li className="p-4" onClick={() => navigate("/")}>
              <button className="hover:text-lg hover:text-red-400 transition-all duration-300">
                Logout
              </button>
            </li>
          </ul>

          <div className="block sm:hidden">
            <PiArticle
              size={30}
              onClick={handleNav}
              className={`cursor-pointer ${!nav ? "text-white" : "text-transparent"}`}
            />
          </div>
        </div>
      </div>

      {nav && (
        <div className="fixed left-0 top-0 min-w-[80%] bg-white h-screen bg-opacity-90 backdrop-blur-lg z-10">
          <ul className="uppercase">
            <li>
              <div className="flex justify-between items-center bg-[#007bf3]">
                <img
                  className="w-28 pl-4"
                  src={sltDigital}
                  alt="SLT-digital logo"
                />
                <h1 className="text-xl pb-10 p-4">
                  <IoIosClose
                    className="cursor-pointer border-r-4 hover:bg-gray-800 rounded-3xl"
                    onClick={handleNav}
                  />
                </h1>
              </div>
            </li>
            <li className="p-4 border-b-2 border-b-gray-800" onClick={() => navigate("/hero")}>Home</li>
            {userType === "admin" && (
              <li className="p-4 border-b-2 border-b-gray-800" onClick={() => navigate("/attendance")}>Approvals</li>
            )}
            <li className="p-4 border-b-2 border-b-gray-800" onClick={() => navigate("/shifts")}>Shifts</li>
            <li className="p-4 border-b-2 border-b-gray-800" onClick={() => navigate("/attendance-fe")}>Attendance</li>
            <li className="p-4 border-b-2 border-b-gray-800" onClick={() => navigate("/tailwind")}>Tailwind</li>
            <li className="p-4 border-b-2 border-b-gray-800" onClick={() => navigate("/ecom-web")}>ecom</li>
            <li className="p-4 border-b-2 border-b-gray-800" onClick={() => navigate("/")}>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
