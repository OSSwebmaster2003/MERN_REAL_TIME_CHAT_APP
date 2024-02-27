const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;
app.listen(PORT, (req, res) => {
  console.log(`Server running on port ${PORT}`);
});
