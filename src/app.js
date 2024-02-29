const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/index");
dotenv.config();

const app = express();
const corsOptions = {
  origin: "http://127.0.0.1:9090",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.static("public"));

app.use(express.json());

app.use("/v1", router);

module.exports = app;
