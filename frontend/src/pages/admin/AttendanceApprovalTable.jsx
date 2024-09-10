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
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const handle=()=>{
  setToogle(!toogle)
}
// Group by date and userId
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

// Extract main row data for display
function getMainRowData(rows) {
  const mainRow = rows[0];
  return {
    wda_time: mainRow.wda_time || "N/A", // Handle null or undefined wda_time
    u_fname:
      mainRow.u_fname && mainRow.u_lname
        ? `${mainRow.u_fname} ${mainRow.u_lname}`
        : "N/A",
    wda_approval_status:
      mainRow.wda_approval_status === 1 ? (
        <DoneAllIcon color="success" />
      ) : mainRow.wda_approval_status === null ? (
        <HourglassEmptyIcon color="action" />
      ) : mainRow.wda_approval_status === 2 ? (
        <CancelIcon color="error" />
      ) : (
        "Unknown Status"
      ),
    wd_requesting_user_id: mainRow.wd_requesting_user_id || "N/A",
    wd_date: mainRow.wd_date || "N/A",
    approving_user_name:
      [mainRow.approving_user_fname, " ", mainRow.approving_user_lname] ||
      "N/A",
    requesting_user_name:
      [mainRow.requesting_user_fname, " ", mainRow.requesting_user_lname] ||
      "N/A",
  };
}

function Row(props) {
  const currentUserId = localStorage.getItem("userId")
  const { date, userId, rows, onStatusChange } = props;
  const [open, setOpen] = React.useState(false);
  const [isYes, setIsYes] = useState(false);
  const mainRowData = getMainRowData(rows);

  const handleBtn = async (status) => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/thunder/attendance/approve`,
        {
          approvedUserId: localStorage.getItem("userId"),
          approvalStatus: status,
          requestingUserId: mainRowData.wd_requesting_user_id,
          date: new Date(),
        }
      );
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
      <TableRow
        sx={{
          "& > *": { borderBottom: "unset" },
          "&:hover": {
            backgroundColor: "#e3f2fd", // Set your desired hover color
          },
        }}
      >
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
        <TableCell align="center">{mainRowData.wda_time}</TableCell>
        <TableCell align="center">{userId}</TableCell>
        <TableCell align="center">{mainRowData.requesting_user_name}</TableCell>
        <TableCell align="center">{mainRowData.approving_user_name}</TableCell>
        <TableCell align="center">
          <Button
            disabled={mainRowData.wd_requesting_user_id == currentUserId}
            onClick={() => handleBtn(1)}
            sx={{ minWidth: "10px", width: "35px" }}
          >
            <ThumbUpAltIcon />
          </Button>
          <Button
           disabled={mainRowData.wd_requesting_user_id == currentUserId}
            onClick={handleRejectBtn}
            color="error"
            sx={{ minWidth: "10px", width: "35px" }}
          >
            <ThumbDownAltIcon />
          </Button>
        </TableCell>
        <TableCell align="center">{mainRowData.wda_approval_status}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Attendance Details
              </Typography>
              <Table size="small" aria-label="attendance">
                <TableHead>
                  <TableRow>
                    <TableCell>WD ID</TableCell>
                    <TableCell align="center">Start Time</TableCell>
                    <TableCell align="center">End Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.wd_id}>
                      <TableCell>{row.wd_id}</TableCell>
                      <TableCell align="center">{row.wd_start_time}</TableCell>
                      <TableCell align="center">
                        {row.wd_end_time || (
                          <FiberManualRecordIcon color="success" />
                        )}
                      </TableCell>
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
  onStatusChange: PropTypes.func.isRequired,
};

export default function AttendanceApprovalTable({
  employeeId,
  startDate,
  endDate,
}) {
  const [toogle, setToogle] = useState(false);
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
        // console.log(response.data.data);
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

  const handleStatusChange = () => {
    setToogle(!toogle); // Toggle the state to trigger data re-fetch
  };

  // Filter data based on employeeId
  const filteredData = employeeId
    ? attendaceApprovalDetails.filter(
        (item) => item.wd_requesting_user_id == employeeId
      )
    : attendaceApprovalDetails;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (filteredData.length === 0)
    return <p>There are no records matching the criteria.</p>;

  const groupedData = groupByDateAndUser(filteredData);

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: 3,
        maxHeight: 440,
        overflowY: "auto",
        boxShadow: 1,
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          boxShadow: 10,
        },
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none", // For Firefox
        msOverflowStyle: "none", // For Internet Explorer and Edge
      }}
    >
      <Table stickyHeader aria-label="attendance approval table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left" sx={{ fontWeight: "bold" }}>
              Request date
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Approval Time
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Requested user ID
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Requested user Name
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Approved user
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Approval Action
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Status
            </TableCell>
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
                onStatusChange={handleStatusChange}
              />
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
