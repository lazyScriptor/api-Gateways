import express from "express";
import { addUser, getUsers } from "./database.js";

const app = express();
const PORT = 3001;
app.use(express.json());

app.get("/fakeapi1", (req, res, next) => {
  res.send("This is from fake Server fakeapi1");
});
app.get("/fakeapi2", (req, res, next) => {
  res.send("This is from fake Server fakeapi2");
});
app.post("/users/add", async (req, res) => {
  const { u_id, u_pno, u_address, u_urid, u_fname, u_lname } = req.body;
  console.log( "output",u_id, u_pno, u_address, u_urid, u_fname, u_lname )

  if (!u_id || !u_pno || !u_address || !u_urid || !u_fname || !u_lname) {
    return res.status(400).send("All fields are required.");
  }

  try {
    const result = await addUser({ u_id, u_pno, u_address, u_urid, u_fname, u_lname });
    res.status(201).send(`User added with ID: ${result.insertId}`);
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).send("Error adding user to the database.");
  }
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
