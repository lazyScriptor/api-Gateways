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

function AttendanceFrontEnd() {
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
          borderRadius: 2,
        }}
      >
        <Navbar />
        <Box>
          <Typography variant="h6">
            <strong>Employee attendance view</strong>
          </Typography>
          <Divider sx={{ m: 4 }} />
          <Box display={"flex"} height={"100%"}>
            <Box sx={{ width: "50%", p: 2 }}>
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
                  <Button variant="outlined">In</Button>
                  <Button variant="outlined">Out</Button>
                </Box>
              </Paper>
            </Box>
            <Box sx={{ width: "50%", p: 2 }}>
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AttendanceFrontEnd;
