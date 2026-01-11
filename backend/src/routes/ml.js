const express = require("express");
const axios = require("axios");

const router = express.Router();

/**
 * POST /api/ml/analyze
 * Sends sensor + camera data to Python ML service
 */
router.post("/analyze", async (req, res) => {
  try {
    const mlResponse = await axios.post(
      "http://localhost:8000/analyze",
      req.body
    );

    res.json(mlResponse.data);
  } catch (error) {
    console.error("ML Service Error:", error.message);
    res.status(500).json({ message: "ML service failed" });
  }
});

module.exports = router;
