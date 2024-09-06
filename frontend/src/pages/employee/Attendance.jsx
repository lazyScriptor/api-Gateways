import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Navbar from "../../Navbar";
import Avatar from "@mui/material/Avatar";
import AttendanceTable from "./AttendanceTable";
import SearchIcon from "@mui/icons-material/Search";

function Attendance() {
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
                  <TextField
                    size="small"
                    id="outlined-basic"
                    label="Search employee"
                    variant="outlined"
                    sx={{ width: "70%" }}
                  />
                  <Button>
                    <SearchIcon />
                  </Button>
                </div>
              </div>
              <div className="col-span-4 flex justify-end">
                <div className="bg-transparent p-1 text-center text-gray-600 shadow-none flex items-center">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </div>
              </div>
              {/* Row 2 */}
              <div className="col-span-4">
                <div className="bg-transparent p-1 text-center text-gray-600 shadow-none"></div>
              </div>
              <div className="col-span-8 flex gap-2 justify-end items-center">
                <h1 className="mr-2">Start date</h1>
                <TextField
                  type="date"
                  sx={{ backgroundColor: "transparent" }}
                />
                <h1 className="mr-2">End date</h1>
                <TextField
                  type="date"
                  sx={{ backgroundColor: "transparent" }}
                />
              </div>
              {/* Row 3 */}
              <div className="col-span-12 flex justify-center">
                <Paper elevation={5} sx={{borderRadius:5}}>
                  <AttendanceTable />
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
