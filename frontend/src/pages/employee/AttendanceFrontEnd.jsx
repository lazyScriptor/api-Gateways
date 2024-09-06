import React from "react";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import NavBarEmployee from "./NavBarEmployee";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import AttendanceTable from "./AttendanceTable";
import Navbar from "../../Navbar";
import axios from "axios";
const userId = localStorage.getItem("userId");

function AttendanceFrontEnd() {
  const dateConvertions = (date) => {
    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().split("T")[0]; // 'YYYY-MM-DD'
    return currentDateString;
  };
  const dateTimeConvertions = (dateTime) => {
    const currentDateTime = new Date();
    const currentDateTimeString = currentDateTime.toISOString(); // 'YYYY-MM-DDTHH:MM:SSZ'
    return currentDateTimeString;
  };

  const handleClickIn = async () => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/thunder/attendance/in`,
      {
        userId: userId,
        date: dateConvertions(),
        startTime: dateTimeConvertions(),
      }
    );
    localStorage.setItem("sessionToken", data.insertId);
  };
  const handleClickOut = async () => {
    const sessionToken = localStorage.getItem("sessionToken");
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/thunder/attendance/out`,
      {
        userId: userId,
        sessionToken: sessionToken,
        endTime:dateTimeConvertions()
      }
    );
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
          <strong>Employee attendance view</strong>
        </Typography>
        <Divider sx={{ m: 4 }} />
        <div className="max-w-[1240px] mx-auto md:grid lg:grid-cols-2 p-8 justify-center items-center h-max">
          <Box sx={{ p: 2 }}>
            <Paper sx={{ p: 2 }} elevation={5}>
              <Typography align="center" variant="h6">
                Attendance Form
              </Typography>
              <Divider sx={{ m: 2 }} />
              <Box sx={{ width: "100%", height: "50px" }}>
                <Typography variant="caption">Date</Typography>
                <br />
                <Typography variant="caption">Total working time</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  m: 2,
                }}
              >
                <Button variant="outlined" onClick={handleClickIn}>
                  In
                </Button>
                <Button variant="outlined" onClick={handleClickOut}>
                  Out
                </Button>
              </Box>
            </Paper>
          </Box>
          <Box sx={{ p: 2 }}>
            <Paper sx={{ p: 2 }} elevation={5}>
              <Typography align="center" variant="h6">
                Past attendance list
              </Typography>
              <Divider sx={{ m: 2 }} />
              <Box>
                <AttendanceTable />
              </Box>
            </Paper>
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default AttendanceFrontEnd;
