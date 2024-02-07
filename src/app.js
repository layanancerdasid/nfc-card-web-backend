const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/index");
dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://103.152.119.203:3002",
    credentials: true,
  })
);

app.use(express.static("public"));

app.use(express.json());

app.use("/v1", router);

module.exports = app;
