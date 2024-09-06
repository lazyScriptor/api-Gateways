import express from "express";
import { setAttendanceDetailsService } from "./thunderService.js";

const app = express();
const PORT = 3002;

app.use(express.json());

app.get("/thunderapi1", (req, res) => {
  res.send("This is from thunder server thunderapi1");
});

app.get("/thunderapi2", (req, res) => {
  res.send("This is from thunder server thunderapi2");
});
app.post("/attendance/in", async(req, res) => {
  const response =  await setAttendanceDetailsService(req.body);
  res.send(response);
});

app.listen(PORT, () => {
  console.log("Thunder API server started at port ", PORT);
});
