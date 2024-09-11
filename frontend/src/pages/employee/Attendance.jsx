import {
  Box,
  Button,
  Divider,
  FormLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import AttendanceApprovalTable from "../admin/AttendanceApprovalTable";

function Attendance() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const userName = localStorage.getItem("userName");

  const handleDateChange = (event) => {
    const { name, value } = event.target;
    if (name === "startDate") {
      setStartDate(value);
    } else if (name === "endDate") {
      setEndDate(value);
    }
  };

  return (
    <div className="flex justify-center items-end bg-[#fafafc] min-w-full min-h-screen h-auto">
      <Navbar />
      <Box
        component={Paper}
        elevation={10}
        sx={{
          elevation: 3,
          backgroundColor: "white",
          p: 2,
          width: "95%",
          minHeight: "85vh",
          height: "auto",
          mb: 1,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6">
          <strong>Employee attendance approval form</strong>
        </Typography>
        <Divider sx={{ m: 4 }} />

        {/* Outer box of the grid */}
        <div className="w-full h-full">
          <div className="flex-grow">
            <div className="grid grid-cols-12 gap-2">
              {/* Row 1 */}
              <div className="col-span-8">
                <div className="bg-transparent p-1 text-center text-gray-600 shadow-none flex items-center">
                  <FormLabel sx={{ mr: 1 }}>Search Employee by ID</FormLabel>
                  <TextField
                    component={Paper}
                    elevation="2"
                    size="small"
                    id="outlined-basic"
                    onChange={(e) => setEmployeeId(e.target.value)}
                    label="Search by employee id"
                    variant="outlined"
                    sx={{ width: "200px" }}
                  />
                </div>
              </div>
              <div className="col-span-4 flex justify-end">
                <div className="bg-transparent p-1 text-center text-gray-600 shadow-none flex items-center">
                  <FormLabel sx={{mr:3}}>{userName}</FormLabel>
                  <Avatar alt={userName} src="/static/images/avatar/1.jpg" />
                </div>
              </div>
              {/* Row 2 */}
              {/* <div className="col-span-4">
                <div className="bg-transparent p-1 text-center text-gray-600 shadow-none"></div>
              </div> */}
              <Paper
                sx={{ width: "500px", p: 2, borderRadius: 3, m: 3 }}
                elevation={3}
              >
                <div className="col-span-8 flex gap-2 justify-end items-center">
                  <FormLabel>StartDate</FormLabel>
                  <TextField
                    elevation={2}
                    type="date"
                    name="startDate"
                    value={startDate}
                    onChange={handleDateChange}
                    sx={{ backgroundColor: "transparent" }}
                  />
                  <h1 className="mr-2">End date</h1>
                  <TextField
                    elevation={2}
                    type="date"
                    name="endDate"
                    value={endDate}
                    onChange={handleDateChange}
                    sx={{ backgroundColor: "transparent" }}
                  />
                </div>
              </Paper>
              {/* Row 3 */}
              <div className="col-span-12 flex justify-center">
                <Paper
                  elevation={5}
                  sx={{ borderRadius: 5, minWidth: "1000px", borderRadius: 3 }}
                >
                  <AttendanceApprovalTable
                    employeeId={employeeId}
                    startDate={startDate}
                    endDate={endDate}
                  />
                </Paper>
              </div>
              <div className="col-span-4"></div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Attendance;
