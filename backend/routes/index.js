import express from "express";
import axios from "axios";

const router = express.Router();

//methanata enne localhost:3000 request me function eken e request eka awasha server ekata redirect kranwa

// Use a wildcard to capture all path segments after serverName
router.all("/:serverName/*", (req, res) => {
  const serverName = req.params.serverName;
  const path =  req.params[0];
  let targetUrl;

  // Determine the target URL based on the serverName
 if (serverName === "fakeapi") {
  targetUrl = `http://localhost:3001/${path}`;
} else if (serverName === "thunderapi") {
  targetUrl = `http://localhost:3002/${path}`;
} else {
  return res.status(404).send("API name does not exist");
}

  // Forward the request to the target server
  axios
    .get(targetUrl)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.error("Error making API request:", error);
      res.status(500).send("Error fetching data from the API.");
    });
});
export default router;
