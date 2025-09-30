// index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");

dotenv.config();
const app = express();

// Connect to MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) console.error("Database connection failed:", err);
  else console.log("Connected to database!");
});

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON bodies

const PORT = process.env.PORT || 5000;

// Test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Get all users
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Register new user
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).send("All fields are required");

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.send("User registered successfully!");
    }
  );
});

// Login user
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(400).send("User not found");

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Incorrect password");

    res.send("Login successful!");
  });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
