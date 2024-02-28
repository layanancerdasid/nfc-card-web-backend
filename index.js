const express = require("express");
const { createServer } = require("node:http");
const cors = require("cors");

const port = 5000;
const app = express();
var corsOptions = {
  origin: ["http://103.152.119.203:3000", "http://localhost:3000"],
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corsOptions));
const server = createServer(app);

app.use(express.json());
server.listen(port, () => {
  console.log(`server listen at port ${port}`);
});
