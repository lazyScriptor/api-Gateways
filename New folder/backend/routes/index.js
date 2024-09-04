import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/fakeapi", proxy("http://localhost:3001"));
app.use("/thunder", proxy("http://localhost:3002"));
app.use("/login", proxy("http://localhost:3003"));

export default app;

