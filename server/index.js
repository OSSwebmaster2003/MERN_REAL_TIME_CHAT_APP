const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);

app.get("/", (req, res) => {
  res.send("Welcome to our chat app APIs...");
});

const port = process.env.PORT || 8000;
const url = process.env.MONGODB_URL;

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});

mongoose
  .connect(url)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("MongoDB connection error ", err.message));
