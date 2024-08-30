import express from "express";
import { getUsers } from "./database.js";

const app = express();
const PORT = 3002;

app.use(express.json());

app.get("/thunderapi1", (req, res) => {
  res.send("This is from thunder server thunderapi1");
});

app.get("/thunderapi2", (req, res) => {
  res.send("This is from thunder server thunderapi2");
});

app.get("/users", async (req, res) => {
  try {
    const users = await getUsers(); // Await the promise returned by getUsers
    console.log(users);
    res.json(users); // Send the users as JSON
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Error fetching users');
  }
});

app.listen(PORT, () => {
  console.log("Thunder API server started at port ", PORT);
});
