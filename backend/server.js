require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const routes = require("./routes");

const app = express();
const PORT = 3002;

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.use("/api", routes);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
  });
});
