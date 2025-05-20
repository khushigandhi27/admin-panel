require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./src/config/db");

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
app.use(express.urlencoded({ extended: true }));

// ✅ CORS setup
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
}));

// ✅ API Routes
app.use("/api/users", userRoutes);
app.use("/api/task", taskRoutes);
app.use("/api/test", testRoutes);
app.use("/api/subscriptions", subscriptionRoutes);

// ✅ Database Test
app.get("/api/test-db", async (req, res) => {
  try {
    const [rows] = await db.query("SHOW TABLES");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Error Handling
app.use((err, req, res, next) => {
  console.error("❌ INTERNAL ERROR:", err.stack);
  res.status(500).json({ error: "Internal Server Error", details: err.message });
});

// ✅ Serve React frontend (AFTER all routes)
app.use(express.static(path.join(__dirname, "../admin-panel-frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../admin-panel-frontend/build/index.html"));
});

// ✅ Start server
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

server.setTimeout(500000); // optional
