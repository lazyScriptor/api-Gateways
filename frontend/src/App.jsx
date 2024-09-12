import React, { lazy, Suspense } from "react";
import Login from "./login/Login";
import { helix } from "ldrs";

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
  delay(3000).then(() => import("./pages/tailwind/EComWeb"))
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <>
                <NavbarNew/>
              <div
                className="w-screen h-screen flex justify-center items-center  bg-gradient-to-r from-gray-300/80 to-gray-100 
    dark:from-gray-800 dark:to-gray-500 dark:text-white
    transition-all duration-500"
              >
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
