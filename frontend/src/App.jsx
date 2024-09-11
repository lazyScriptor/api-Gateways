import React, { lazy, Suspense } from "react";
import Login from "./login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entry from "./Entry";
// import Attendance from "./pages/employee/Attendance";
import Shifts from "./pages/employee/Shifts";
// import AttendanceFrontEnd from "./pages/employee/AttendanceFrontEnd";
import TailwindSection from "./pages/employee/TailwindSection";

const Attendance = lazy(() => import("./pages/employee/Attendance"));
const AttendanceFrontEnd = lazy(() =>
  import("./pages/employee/AttendanceFrontEnd")
);

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/hero" element={<Entry />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/shifts" element={<Shifts />} />
            <Route path="/attendance-fe" element={<AttendanceFrontEnd />} />
            <Route path="/tailwind" element={<TailwindSection />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
