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

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function Shifts() {
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
            <strong>Employee shifts</strong>
          </Typography>
          <Divider sx={{ m: 4 }} />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
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
            <Grid size={4} display={{}}>
              <Item
                elevation={0}
                sx={{ display: "flex", justifyContent: "end" }}
              >
                <Button variant="contained" sx={{}}>
                  Add shifts +
                </Button>
              </Item>
            </Grid>
            <Divider sx={{ width: "100%" }} />
            <Grid size={12}>
              <Item
                elevation={0}
                sx={{
                  gap: 2,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
            <Shifttable/>
              </Item>
            </Grid>
        
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Shifts;


 function Shifttable() {
  return (
    <TableContainer component={Paper} elevation={5} sx={{borderRadius:2}}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];