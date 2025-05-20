require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./src/config/db");
const path = require("path");

require("./src/models/taskModel");
require("./src/models/userModel");
require("./src/models/subscriptionModel");
require("./src/models/testModel");

const userRoutes = require("./src/routes/userRoute");
const taskRoutes = require("./src/routes/taskRoute");
const testRoutes = require("./src/routes/testRoute");
const subscriptionRoutes = require("./src/routes/subscriptionRoute");

const app = express();
app.use(express.json());

// ✅ Updated CORS Configuration
const allowedOrigins = [
  "http://localhost:3000",
  undefined
];

// Serve frontend build statically
app.use(express.static(path.join(__dirname, "../admin-panel-frontend/build")));

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error("🚫 CORS Error: Blocked origin =>", origin);
      callback(new Error("CORS Not Allowed"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  exposedHeaders: ["Content-Disposition"] // For file uploads
}));

// ✅ Routes
app.use("/api/users", userRoutes);
app.use("/api/task", taskRoutes);
app.use("/api/test", testRoutes);
app.use("/api/subscriptions", subscriptionRoutes);

// Fallback to React index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../admin-panel-frontend/build", "index.html"));
});


// ✅ Error Handling Middleware (at the end)
app.use((err, req, res, next) => {
  console.error("ERROR: ", err.stack);
  res.status(500).json({ error: "Internal Server Error", details: err.message });
});

// ✅ Test Database Connection Endpoint
app.get("/api/test-db", async (req, res) => {
  try {
    const [rows] = await db.query("SHOW TABLES");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// ✅ Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the Admin Panel Backend API");
});

// ✅ Start the Server
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

// ✅ Increase server timeout to 5 minutes
server.setTimeout(500000); // 5 minutes
