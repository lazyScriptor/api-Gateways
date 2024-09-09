import React from "react";
import { ReactTyped } from "react-typed";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigateTo=useNavigate();
  const onButtonClick = () => {
    navigateTo('/attendance-fe')
  };
  return (
    <div className="mt-[-96px] flex flex-col items-center">
      <h1 className="uppercase text-center text-[#4994db] font-semibold md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl mb-2 px-4">
        A Digital solution for the management
      </h1>
      <h1 className="text-center font-semibold text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl px-4">
        Employee Attendance System
      </h1>
      <p className="text-center md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl px-4">
        fast, flexible accurate @{" "}
        <ReactTyped
          strings={[
            "<strong>MIT</strong>",
            "<strong><span style='color:#4994db'>Theekshana</span></strong>",
            "<strong><u>BSC</u></strong>",
          ]}
          typeSpeed={200}
          backSpeed={200}
          loop
        />
      </p>

      {/* <button
        onClick={onButtonClick}
        className="text-white font-bold bg-[#0055a4] rounded-2xl h-10 md:w-[250px] md:h-[50px] w-[200px] mt-6 "
      >
        Go to Attendance <KeyboardArrowRightIcon className="hover:text-4xl transition-all duration-300"/>
      </button> */}
      <button
        onClick={onButtonClick}
        className="text-white font-bold bg-[#007bf3] hover:bg-[#0055a4f0] rounded-2xl h-10 md:w-[200px] md:h-[50px] w-[220px] mt-6 flex items-center justify-center space-x-2 group"
      >
        Attendance
        <KeyboardArrowRightIcon className="transition-transform duration-300 transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}

export default Hero;
