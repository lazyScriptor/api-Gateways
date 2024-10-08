import express from "express";
import {
  getUserInOutDetailsService,
  setAttendanceInDetailsService,
  setAttendanceOutDetailsService,
} from "./thunderService.js";

const app = express();
const PORT = 3002;

app.use(express.json());

app.get("/thunderapi1", (req, res) => {
  res.send("This is from thunder server thunderapi1");
});

app.get("/thunderapi2", (req, res) => {
  res.send("This is from thunder server thunderapi2");
});
app.post("/attendance/in", async (req, res) => {
  const response = await setAttendanceInDetailsService(req.body);
  res.send(response);
});
app.post("/attendance/out", async (req, res) => {
  const response = await setAttendanceOutDetailsService(req.body);
  res.send(response);
});
app.get("/attendance/getdetails/:userId", async (req, res) => {
  const response = await getUserInOutDetailsService(req.params.userId);
  console.log("resposne",response)
  res.send(response);
});
app.listen(PORT, () => {
  console.log("Thunder API server started at port ", PORT);
});
