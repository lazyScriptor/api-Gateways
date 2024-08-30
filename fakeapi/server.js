import express from "express";
import { getUsers } from "./database.js";

const app = express();
const PORT = 3001;
app.use(express.json());

app.get("/fakeapi1", (req, res, next) => {
  res.send("This is from fake Server fakeapi1");
});
app.get("/fakeapi2", (req, res, next) => {
  res.send("This is from fake Server fakeapi2");
});
app.get("/users/:id", async (req, res) => {
  try {
    const users = await getUsers(req.params.id); // Await the promise returned by getUsers
    console.log(users);
    res.json(users); // Send the users as JSON
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Error fetching users');
  }
});
app.listen(PORT, () => {
  console.log("fake API server started at port ", PORT);
});
