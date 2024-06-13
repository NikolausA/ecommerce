require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes");

const app = express();
const PORT = 3002;

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api", routes);

// app.get("/api", (req, res) => {
//   res.json({ message: "Server is working" });
// });

mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
  });
});
