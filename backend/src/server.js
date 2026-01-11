require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const mlRoutes = require("./routes/mlRoutes");

const app = express();          // <-- CREATE APP FIRST

app.use(cors());
app.use(express.json());

connectDB();                    // <-- THEN CONNECT DB

app.use("/api/auth", authRoutes);
app.use("/api/ml", mlRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
