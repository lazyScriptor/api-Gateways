import React from "react";
import Login from "./login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entry from "./Entry";
import Attendance from "./pages/employee/Attendance";
import Shifts from "./pages/employee/Shifts";
import AttendanceFrontEnd from "./pages/employee/AttendanceFrontEnd";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/hero" element={<Entry />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/shifts" element={<Shifts />} />
          <Route path="/attendance-fe" element={<AttendanceFrontEnd />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
