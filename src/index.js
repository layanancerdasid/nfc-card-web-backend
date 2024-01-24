
const dotenv = require('dotenv');

const process = require('node:process');

dotenv.config();

const port = process.env.PORT;

const app = require("./app");

app.listen(port, () => console.log(`Server is running on port: ${port}`));
