import React, { useEffect, useState } from "react";
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
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import DoneAllIcon from "@mui/icons-material/DoneAll";

function AttendanceFrontEnd() {
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchOutBtnStatus = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/thunder/attendance/out/latest/${userId}`
        );
        if (
          () => {
            response.data.data[0].wd_date === dateConvertions(new Date());
            return true;
          }
        ) {
          setSessionToken(response.data.data[0].wd_id);
          setOutBtnStatus(false);
          setInBtnStatus(true);
        }
      } catch (error) {
        console.error("Error fetching out button status:", error);
      }
    };

    fetchOutBtnStatus();
  }, [userId]);

  const [inBtnStatus, setInBtnStatus] = useState(false);
  const [outBtnStatus, setOutBtnStatus] = useState(true);
  const [sessionToken, setSessionToken] = useState("");

  const dateConvertions = () => {
    const currentDate = new Date();
    // Convert the current date to Sri Lanka's time zone (Asia/Colombo)
    const sriLankaDateString = currentDate.toLocaleString("en-US", {
      timeZone: "Asia/Colombo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    // Format the date string as 'YYYY-MM-DD'
    const [month, day, year] = sriLankaDateString.split("/");
    return `${year}-${month}-${day}`;
  };

  const handleClickIn = async () => {
    setInBtnStatus(true); // Set button status to loading or disabled
    setOutBtnStatus(false);
    try {
      console.log("dasdqawduaid");
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/thunder/attendance/in`,
        {
          userId: userId,
          date: new Date(),
          startTime: new Date(),
        }
      );
      console.log("dataaaaaaa", data);
      setSessionToken(data.insertId);
      localStorage.setItem("sessionToken", data.insertId);

      // Optionally, you can set a success message here
    } catch (error) {
      console.error("Error occurred while marking attendance in:", error);
      // Error occurred, set button status to error or reset
      setInBtnStatus(false);
      // Optionally, you can set an error message here
    }
  };

  const handleClickOut = async () => {
    setInBtnStatus(false);
    setOutBtnStatus(true); // Set button status to loading or disabled
    try {
      const sessionToken = localStorage.getItem("sessionToken");
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/thunder/attendance/out`,
        {
          userId: userId,
          sessionToken: sessionToken,
          endTime: new Date(),
        }
      );

      // Optionally, you can set a success message here
    } catch (error) {
      console.error("Error occurred while marking attendance out:", error);
      // Error occurred, set button status to error or reset
      setOutBtnStatus(false);
      // Optionally, you can set an error message here
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        backgroundColor: "#fafafc",
        minWidth: "100vw",
        minHeight: "100vh",
        height: "auto",
      }}
    >
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
          mt: 10,
          borderRadius: 2,
        }}
      >
        <Navbar />
        <Box sx={{ display: "flex" }}>
          <Typography variant="h6">
            <strong>
              Employee attendance view - {localStorage.getItem("userName")}
            </strong>
          </Typography>
          <Box flexGrow={1} />
          <Typography variant="h6">Token number: {sessionToken}</Typography>
        </Box>

        <Divider sx={{ m: 4 }} />
        <div className="max-w-[1240px] mx-auto md:grid lg:grid-cols-2 p-8 justify-center items-center h-max ">
          <Box sx={{ p: 2, maxWidth: "300px" }}>
            <Paper sx={{ p: 2, borderRadius: 3 }} elevation={5}>
              <Typography align="center" variant="h6">
                Attendance Form
              </Typography>
              <Divider sx={{ m: 2 }} />
              <Box sx={{ width: "100%", height: "50px" }}>
                <Typography variant="caption">
                  Today : {dateConvertions()}
                </Typography>
                <br />
                <Typography variant="caption">
                  Total worked time for today {}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  m: 2,
                }}
              >
                <Button
                  disabled={inBtnStatus}
                  sx={{
                    backgroundColor: "#7BF300",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#6abf00" },
                  }}
                  variant="contained"
                  onClick={handleClickIn}
                >
                  <LoginIcon />
                </Button>

                <Button
                  disabled={outBtnStatus}
                  sx={{
                    backgroundColor: "#F3007B",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#c70060" },
                  }}
                  variant="contained"
                  onClick={handleClickOut}
                >
                  <LogoutIcon />
                </Button>
              </Box>
            </Paper>
          </Box>
          <Box sx={{ p: 2 }}>
            <Paper sx={{ p: 2, borderRadius: 3 }} elevation={5}>
              <Typography align="center" variant="h6">
                Past attendance list
              </Typography>
              <Divider sx={{ m: 2 }} />
              <Box>
                <AttendanceTable
                  inBtnStatus={inBtnStatus}
                  outBtnStatus={outBtnStatus}
                />
              </Box>
            </Paper>
          </Box>
        </div>
      </Box>
    </Box>
  );
}

export default AttendanceFrontEnd;
