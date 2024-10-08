import React, { useState } from "react";
import { PiArticle } from "react-icons/pi";
import { IoIosClose } from "react-icons/io";
import { Navigate, useNavigate } from "react-router-dom";
import sltDigital from "../../assets/slt-digital.png";

function NavBarEmployee() {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="h-16 w-full flex justify-between text-base mx-auto max-w-[1024px] px-4 items-center  bg-slate-600">
      <img className="w-28" src={sltDigital} alt="SLT-digital logo" />

      <ul className="hidden sm:flex hover:text-md text-white transition-all duration-600 w-[650px] justify-center gap-4">
        <li className="p-4" onClick={() => [navigate("/")]}>
          <button className="hover:text-lg hover:text-blue-200 transition-all duration-300">
            Home
          </button>
        </li>
        <li className="p-4" onClick={() => [navigate("/attendance")]}>
          <button className="hover:text-lg hover:text-blue-200 transition-all duration-300">
            Attendance
          </button>
        </li>
        <li className="p-4" onClick={() => [navigate("/")]}>
          <button className="hover:text-lg hover:text-blue-200 transition-all duration-300">
            Resource
          </button>
        </li>
        <li className="p-4" onClick={() => [navigate("/")]}>
          <button className="hover:text-lg hover:text-blue-200 transition-all duration-300">
            About
          </button>
        </li>
  
        <li className="p-4" onClick={() => [navigate("/")]}>
          <button className="hover:text-lg hover:text-red-400 transition-all duration-300">
            Logout
          </button>
        </li>
      </ul>
      <div className="block sm:hidden">
        {
          <PiArticle
            size={30}
            onClick={() => setNav(!nav)}
            className={`cursor-pointer ${
              !nav ? "text-white" : "text-transparent"
            }`}
          />
        }
      </div>
      {nav && (
        <div className="fixed left-0 top-0 min-w-[80%] bg-black h-screen bg-opacity-90 backdrop-blur-sm z-10">
          <ul className=" uppercase">
            <li>
              <div className="flex justify-between items-center">
                <img
                  className="w-28 pl-4"
                  src={sltDigital}
                  alt="SLT-digital logo"
                />
                <h1 className=" text-xl pb-10 p-4">
                  <IoIosClose
                    className={`cursor-pointer border-r-4 hover:bg-gray-800 rounded-3xl`}
                    onClick={() => {
                      setNav(!nav);
                    }}
                  />
                </h1>
              </div>
            </li>
            <li className="p-4 border-b-2 border-b-gray-800">Home</li>
            <li className="p-4 border-b-2 border-b-gray-800">Company</li>
            <li className="p-4 border-b-2 border-b-gray-800">Resources</li>
            <li className="p-4 border-b-2 border-b-gray-800">About</li>
            <li className="p-4 border-b-2 border-b-gray-800">Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBarEmployee;
