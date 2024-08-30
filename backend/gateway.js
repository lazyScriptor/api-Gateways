import express from "express";
const app = express();
const PORT = 3000;
import routes from './routes/index.js';

app.use(express.json());

app.use('/',routes)

app.listen(PORT, () => {
  console.log("Gateway has started on port ", PORT);
});
