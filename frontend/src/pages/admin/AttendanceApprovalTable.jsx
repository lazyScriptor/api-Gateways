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
import DoneAllIcon from "@mui/icons-material/DoneAll"; // Success
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty"; // Pending
import CancelIcon from "@mui/icons-material/Cancel"; // Rejected

function groupByDateAndUser(data) {
  return data.reduce((acc, item) => {
    const date = item.wd_date.split("T")[0]; // Extract the date part (YYYY-MM-DD)
    const userId = item.wd_requesting_user_id;

    if (!acc[date]) {
      acc[date] = {};
    }

    if (!acc[date][userId]) {
      acc[date][userId] = [];
    }

    acc[date][userId].push(item);
    return acc;
  }, {});
}

function getMainRowData(rows) {
  const mainRow = rows[0];
  return {
    wda_time: mainRow.wda_time || "N/A",
    u_fname: mainRow.u_fname || "N/A",
    wda_approval_status:
      mainRow.wda_approval_status === 1 ? (
        <DoneAllIcon color="success" /> // Green icon for approved status
      ) : mainRow.wda_approval_status === null ? (
        <HourglassEmptyIcon color="action" /> // Grey icon for pending status
      ) : mainRow.wda_approval_status === 2 ? (
        <CancelIcon color="error" /> // Red icon for rejected status
      ) : (
        "Unknown Status"
      ),
    wd_requesting_user_id: mainRow.wd_requesting_user_id || "N/A",
    wd_date: mainRow.wd_date || "N/A"
  };
}

const dateTimeConvertions = () => {
  const currentDateTime = new Date();
  const sriLankaDateTimeString = currentDateTime.toLocaleString("en-US", {
    timeZone: "Asia/Colombo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const [date, time] = sriLankaDateTimeString.split(", ");
  const [month, day, year] = date.split("/");
  const formattedDateTime = `${year}-${month}-${day}T${time}`;

  return formattedDateTime;
};

const dateConvertions = (date) => {
  const sriLankaDateString = new Date(date).toLocaleString("en-US", {
    timeZone: "Asia/Colombo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const [month, day, year] = sriLankaDateString.split('/');
  return `${year}-${month}-${day}`;
};

function Row(props) {
  const { date, userId, rows, onStatusChange } = props;
  const [open, setOpen] = React.useState(false);
  
  const mainRowData = getMainRowData(rows);

  const handleBtn = async (status) => {
  
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/thunder/attendance/approve`, {
        approvedUserId: localStorage.getItem("userId"),
        approvedTime: dateTimeConvertions(),
        approvalStatus: status,
        requestingUserId: mainRowData.wd_requesting_user_id,
        date: dateConvertions(mainRowData.wd_date)
      });
      onStatusChange(); // Notify parent to refresh data
    } catch (error) {
      console.error("Error updating approval status:", error);
    }
  };

  const handleRejectBtn = () => {
    handleBtn(2); // Reject status code
  };

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
        <TableCell>{userId}</TableCell>
        <TableCell>{mainRowData.u_fname}</TableCell>
        <TableCell>
          <Button onClick={() => handleBtn(1)}>
            <ThumbUpAltIcon />
          </Button>
          <Button color="error" onClick={handleRejectBtn}>
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
  userId: PropTypes.number.isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      wd_id: PropTypes.number.isRequired,
      wd_start_time: PropTypes.string.isRequired,
      wd_end_time: PropTypes.string,
      wda_time: PropTypes.string,
      u_fname: PropTypes.string,
      wda_approval_status: PropTypes.number,
      wd_requesting_user_id: PropTypes.number.isRequired,
      wd_date: PropTypes.string.isRequired,
    })
  ).isRequired,
  onStatusChange: PropTypes.func.isRequired, // Add onStatusChange prop
};

export default function AttendanceApprovalTable() {
  const [toogle, setToogle] = useState(false);
  const [attendaceApprovalDetails, setAttendaceApprovalDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const fetchAttendanceDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/thunder/attendance/getdetails/approval/${userId}`
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
  }, [toogle]);
  useEffect(()=>{

  },[toogle])

  const handleStatusChange = () => {
    setToogle(!toogle); // Toggle the state to trigger data re-fetch
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const groupedData = groupByDateAndUser(attendaceApprovalDetails);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Date</TableCell>
            <TableCell>Approval Time</TableCell>
            <TableCell>Requesting user id</TableCell>
            <TableCell>Approved by</TableCell>
            <TableCell align="center">Approve</TableCell>
            <TableCell>Approval Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(groupedData).map((date) =>
            Object.keys(groupedData[date]).map((userId) => (
              <Row
                key={`${date}-${userId}`}
                date={date}
                userId={parseInt(userId, 10)}
                rows={groupedData[date][userId]}
                onStatusChange={handleStatusChange} // Pass the function as prop
              />
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
