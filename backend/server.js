const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5432
});

// retry connection until database ready
async function init() {
  let connected = false;

  while (!connected) {
    try {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `);

      connected = true;
      console.log("Database connected and table ready");

    } catch (err) {
      console.log("Waiting for database...");
      await new Promise(res => setTimeout(res, 3000));
    }
  }
}

init();

app.get("/health", (req, res) => {
  res.send("Backend Healthy");
});

app.post("/users", async (req, res) => {
  try {
    const { name } = req.body;
    const result = await pool.query(
      "INSERT INTO users(name) VALUES($1) RETURNING *",
      [name]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});