const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const foodRoutes = require("./routes/foodRoutes");
const claimRoutes = require("./routes/claimRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/food", foodRoutes);
app.use("/api/claims", claimRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "ZeroBite backend is running",
  });
});

// Database Connection
connectDB();

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});