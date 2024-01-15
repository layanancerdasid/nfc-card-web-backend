const express = require('express');
const { createServer } = require('node:http');
const cors = require('cors');

const port = 5000;
const app = express();
app.use(cors());
const server = createServer(app);

app.use(express.json());
server.listen(port, () => {
  console.log(`server listen at port ${port}`);
});
