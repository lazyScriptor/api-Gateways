import React, { lazy, Suspense, useEffect } from "react";
import Login from "./login/Login";
import { helix } from "ldrs";
import AOS from "aos";
import "aos/dist/aos.css";

helix.register();

// Default values shown

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entry from "./Entry";
import Shifts from "./pages/employee/Shifts";
import TailwindSection from "./pages/employee/TailwindSection";
import NavbarNew from "./pages/tailwind/components/NavbarNew";

// Lazy load with default behavior
const Attendance = lazy(() => import("./pages/employee/Attendance"));
const AttendanceFrontEnd = lazy(() =>
  import("./pages/employee/AttendanceFrontEnd")
);

// Function to simulate a 3-second delay before loading the EcomWeb component
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const EcomWeb = lazy(() =>
  delay(500).then(() => import("./pages/tailwind/EComWeb"))
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <>
              <div
                className="w-screen h-screen flex flex-col justify-center items-center gap-8 bg-gradient-to-b from-white to-gray-500 
    dark:from-gray-900 dark:to-gray-600 dark:text-white
    transition-all duration-500"
              >
                {/* <NavbarNew /> */}

                <l-helix size="450" speed="2.5" color="#111827"></l-helix>
              </div>
            </>
          }
        >
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/hero" element={<Entry />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/shifts" element={<Shifts />} />
            <Route path="/attendance-fe" element={<AttendanceFrontEnd />} />
            <Route path="/tailwind" element={<TailwindSection />} />
            {/* EcomWeb will now load after a 3-second delay */}
            <Route path="/ecom-web" element={<EcomWeb />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
