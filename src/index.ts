import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 3000;

app.use("/static", express.static(path.resolve(__dirname, "../static")));

app.listen(port, () => {
  console.log("Port:" + port);
});
