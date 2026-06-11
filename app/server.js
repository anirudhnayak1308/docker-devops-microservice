const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
  user: process.env.DB_USER || "admin",
  host: process.env.DB_HOST || "postgres",
  database: process.env.DB_NAME || "devopsdb",
  password: process.env.DB_PASSWORD || "admin123",
  port: 5432,
});

app.get("/", (req, res) => {
  res.send("Hello from Anirudh's Docker DevOps Microservice 🚀");
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    application: "docker-devops-microservice"
  });
});

app.get("/db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      database: "connected",
      time: result.rows[0].now
    });
  } catch (error) {
    res.status(500).json({
      database: "connection failed",
      error: error.message
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});