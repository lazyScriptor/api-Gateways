import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

function groupByDate(data) {
  return data.reduce((acc, item) => {
    const date = item.wd_date.split("T")[0]; // Extract the date part (YYYY-MM-DD)
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});
}

function getMainRowData(rows) {
  // Assuming that the first entry in the rows array contains the necessary main row information
  const mainRow = rows[0];
  return {
    wda_time: mainRow.wda_time || "N/A",
    u_fname: mainRow.u_fname || "N/A",
    wda_approval_status:
      mainRow.wda_approval_status === 1 ? "Approved" : "Pending",
  };
}

function Row(props) {
  const { date, rows } = props;
  const [open, setOpen] = React.useState(false);

  const mainRowData = getMainRowData(rows);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {date}
        </TableCell>
        <TableCell>{mainRowData.wda_time}</TableCell>
        <TableCell>{mainRowData.u_fname}</TableCell>
        <TableCell>
          <Button>
            <ThumbUpAltIcon />
          </Button>
          <Button color="error">
            <ThumbDownAltIcon />
          </Button>
        </TableCell>
        <TableCell>{mainRowData.wda_approval_status}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Attendance Details
              </Typography>
              <Table size="small" aria-label="attendance">
                <TableHead>
                  <TableRow>
                    <TableCell>WD ID</TableCell>
                    <TableCell>Start Time</TableCell>
                    <TableCell>End Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.wd_id}>
                      <TableCell>{row.wd_id}</TableCell>
                      <TableCell>{row.wd_start_time}</TableCell>
                      <TableCell>{row.wd_end_time || "N/A"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  date: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      wd_id: PropTypes.number.isRequired,
      wd_start_time: PropTypes.string.isRequired,
      wd_end_time: PropTypes.string,
      wda_time: PropTypes.string, // Field for approval time
      u_fname: PropTypes.string, // Field for approved user's first name
      wda_approval_status: PropTypes.number, // Field for approval status
    })
  ).isRequired,
};

export default function AttendanceApprovalTable() {
  const [attendaceApprovalDetails, setAttendaceApprovalDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const fetchAttendanceDetails = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/thunder/attendance/getdetails/approval/${userId}`
        );
        console.log(response.data.data);
        setAttendaceApprovalDetails(response.data.data);
      } catch (err) {
        console.error("Error fetching attendance details:", err);
        setError("Failed to fetch attendance details.");
      } finally {
        setLoading(false);
      }
    };

    fetchAttendanceDetails();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Group the attendance data by date
  const groupedData = groupByDate(attendaceApprovalDetails);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Date</TableCell>
            <TableCell>Approval Time</TableCell>
            <TableCell>Approved by</TableCell>
            <TableCell align="center">Approve</TableCell>
            <TableCell>Approval Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(groupedData).map((date) => (
            <Row key={date} date={date} rows={groupedData[date]} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
