import express from "express";
import axios from "axios";

const router = express.Router();

// Use a wildcard to capture all path segments after serverName
router.all("/:serverName/*", async (req, res) => {
  // url --> http://localhost:3000/fakeapi/users/add
  const serverName = req.params.serverName; // --> fakeapi
  const path = req.params[0]; // --> users/add

  let targetUrl;

  // target URL based on the serverName
  if (serverName === "fakeapi") {
    targetUrl = `http://localhost:3001/${path}`;
  } else if (serverName === "thunderapi") {
    targetUrl = `http://localhost:3002/${path}`;
  } else {
    return res.status(404).send("API name does not exist");
  }

  try {
    let response;
    // Forward the request to the target server based on the method
    if (req.method === "GET") {
      response = await axios.get(targetUrl);
    } else if (req.method === "POST") {
      response = await axios.post(targetUrl, req.body);
    } else {
      return res.status(405).send("Method Not Allowed");
    }
    res.send(response.data);
  } catch (error) {
    console.error("Error making API request:", error);
    res.status(500).send("Error fetching data from the API.");
  }
});

export default router;
