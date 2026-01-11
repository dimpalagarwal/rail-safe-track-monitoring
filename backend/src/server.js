require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const mlRoutes = require("./routes/mlRoutes");

app.use("/api/ml", mlRoutes);


connectDB();

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
