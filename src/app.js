const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./routes/index");
dotenv.config();

const app = express();
const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(express.static("public"));

app.use(express.json());

app.use("/v1", router);

module.exports = app;
