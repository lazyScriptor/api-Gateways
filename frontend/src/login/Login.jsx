import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Paper,
} from "@mui/material";
import "./login.css";
import monitor from "../assets/monitor.png";
import element from "../assets/element1.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Close from "@mui/icons-material/Close";
import purple from "../assets/purple.png";
import green from "../assets/green.png";
import { useNavigate } from "react-router-dom";
import sltLogo from "../assets/slt-digital.png";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrorText, setLoginErrorText] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClearUsername = () => setUsername("");
  const handleUsernameChange = (event) => {
    setLoginErrorText("");
    setUsername(event.target.value);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleLogin = async (username, password) => {
    const credentials = {
      username,
      password,
    };
    console.log(credentials);
    await axios
      .post("http://localhost:3000/login/authenticate", credentials)
      .then((response) => {
        try {
          if (response.data.authStatus === true) {
            navigate("/hero");
            console.log(response.data.results);
          } else {
            setLoginErrorText(response.data.results);
            console.log(response.data.results);
          }
        } catch (err) {
          console.log(err);
        }
      });
  };
  const calculateTransform = () => {
    const xOffset = (mousePos.x - 0.5) * 50;
    const yOffset = (mousePos.y - 0.5) * 50;
    return `translate(${xOffset}px, ${yOffset}px)`;
  };

  return (
    <Box
      display="flex"
      width="100vw"
      height="100vh"
      sx={{
        backgroundColor: "#15172E",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box width="28vw" display="flex">
        <img
          src={sltLogo}
          style={{ width: "300px", position: "absolute", top: "20px" }}
          alt=""
        />
        {/* <img
          src={monitor}
          style={{ width: "300px", position: "absolute", top: "20px" }}
        /> */}
        <Box sx={{ mt: "25vh" }}>
          <Typography variant="h2" sx={{ color: "white", ml: 5 }}>
            Sign In to the System
          </Typography>
          <Box sx={{ height: "100px" }} />
          <Typography
            variant="h5"
            sx={{ color: "white", ml: 5, lineHeight: 1.9 }}
          >
            If you don't have an <br /> account you can
          </Typography>
          <a
            href="https://www.google.com/"
            style={{
              zIndex: 20000,
              position: "relative",
              textDecoration: "none",
            }}
          >
            <Typography variant="h5" sx={{ color: "#05DAB8", mt: 1, ml: 5 }}>
              Register here!
            </Typography>
          </a>
        </Box>
      </Box>
      <Box
        width="28vw"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          transform: calculateTransform(),
          transition: "transform 0.1s ease-out",
        }}
      >
        <img src={element} style={{ width: "20vw" }} />
      </Box>
      <Box
        gap={4}
        width="38vw"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <TextField
          component={Paper}
          sx={{
            zIndex: 10,
            borderRadius: 2,
            width: "400px",
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
          id="outlined-basic"
          label="Enter username"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="clear username"
                  onClick={handleClearUsername}
                  edge="end"
                >
                  <Close />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          component={Paper}
          value={password}
          onChange={(e) => {
            setLoginErrorText("");
            setPassword(e.target.value);
          }}
          sx={{
            zIndex: 10,
            borderRadius: 2,
            width: "400px",
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
          id="outlined-password-input"
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Typography sx={{ color: "red" }}>{loginErrorText}</Typography>
        <Button
          onClick={() => handleLogin(username, password)}
          variant="contained"
          sx={{
            mt: 5,
            zIndex: 10,
            width: "400px",
            height: "55px",
            borderRadius: 2,
            backgroundColor: "#05DAB8",
            "&:hover": {
              backgroundColor: "#04c5a1",
            },
          }}
        >
          Sign in
        </Button>
        <Box justifyContent="center" display="flex">
          <Typography color="grey">forgot password ?</Typography>
          <a href="https://www.google.com" style={{ textDecoration: "none" }}>
            <Typography sx={{ color: "#05DAB8" }}> Sign in here</Typography>
          </a>
        </Box>
      </Box>
      <img
        src={purple}
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
          width: "900px",
          opacity: 0.4,
          zIndex: -1,
        }}
      />
      <img
        src={purple}
        style={{
          position: "absolute",
          top: "-40%",
          right: "-10%",
          width: "1000px",
          opacity: 0.4,
          zIndex: 0,
        }}
      />
      <img
        src={green}
        style={{
          position: "absolute",
          top: "56%",
          left: "10%",
          width: "700px",
          opacity: 0.1,
          zIndex: 0,
        }}
      />
    </Box>
  );
}
