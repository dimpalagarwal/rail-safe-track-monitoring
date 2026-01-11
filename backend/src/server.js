require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const mlRoutes = require("./routes/mlRoutes");

const app = express();  

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/ml", mlRoutes);

// DB
connectDB(); // DB error can exist, server still runs

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
