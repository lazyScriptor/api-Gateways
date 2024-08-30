import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import NavBarEmployee from "./NavBarEmployee";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import AttendanceTable from "./AttendanceTable";
import Navbar from "../../Navbar";
function Attendance() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    elevation: 0, // Set the elevation to 0 here
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

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
        <Typography variant="h6">
          <strong>Employee attendance approval form</strong>
        </Typography>
        <Divider sx={{ m: 4 }} />
        {/* Outer box of the grid */}
        <Box sx={{ width: "100%", height: "100%" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              {/* Row 1 */}
              <Grid size={8}>
                <Item elevation={0}>
                  <TextField
                    component={Paper}
                    size="small"
                    id="outlined-basic"
                    label="Search employee"
                    variant="outlined"
                    sx={{ width: "70%" }}
                  />
                  <Button>
                    <SearchIcon />
                  </Button>
                </Item>
              </Grid>
              <Grid size={4} display={{}}>
                <Item
                  elevation={0}
                  sx={{ display: "flex", justifyContent: "end" }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Item>
              </Grid>
              {/* Row 2 */}
              <Grid size={4}>
                <Item elevation={0}></Item>
              </Grid>
              <Grid size={8}>
                <Item
                  elevation={0}
                  sx={{
                    gap: 2,
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <h1>Start date</h1>
                  <TextField type="date" component={Paper} />
                  <h1>End date</h1>
                  <TextField type="date" component={Paper} />
                </Item>
              </Grid>
              {/* Row 3 */}
              <Grid size={12}>
                <Item elevation={0}>
                  <AttendanceTable />
                </Item>
              </Grid>
              <Grid size={4} display={{}}></Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Attendance;
