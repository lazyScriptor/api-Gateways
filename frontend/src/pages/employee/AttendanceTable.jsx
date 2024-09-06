import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AttendanceTable({ inBtnStatus, outBtnStatus }) {
  const userId = localStorage.getItem("userId");
  const [attendanceDetails, setAttendanceDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAttendanceDetails = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/thunder/attendance/getdetails/${userId}`
        );
        console.log(response.data.data);
        setAttendanceDetails(response.data.data);
      } catch (err) {
        console.error("Error fetching attendance details:", err);
        setError("Failed to fetch attendance details.");
      } finally {
        setLoading(false);
      }
    };

    fetchAttendanceDetails();
  }, [userId, inBtnStatus, outBtnStatus]);

  const dateConvertions = (date) => {
    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().split("T")[0]; // 'YYYY-MM-DD'
    return currentDateString;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Box sx={{ width: "100%", overflowX: "auto" }}>
      <TableContainer component={Paper} elevation={5}>
        <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Start Time</TableCell>
              <TableCell align="right">End Time</TableCell>
              <TableCell align="right">Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceDetails.map((row) => (
              <TableRow key={row.wd_id}>
                <TableCell component="th" scope="row">
                  {dateConvertions(row.wd_date)}
                </TableCell>
                <TableCell align="right">{row.wd_start_time}</TableCell>
                <TableCell align="right">{row.wd_end_time}</TableCell>
                <TableCell align="right">{row.wd_duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
