const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

// ❌ Hardcoded secret
const SECRET_KEY = "mysecret123";

app.get("/user", (req, res) => {
  const id = req.query.id;

  // ❌ SQL Injection
  const query = `SELECT * FROM users WHERE id='${id}'`;

  res.send("Query: " + query);
});

// ❌ Weak JWT (no expiry)
app.get("/token", (req, res) => {
  const token = jwt.sign({ user: "admin" }, SECRET_KEY);
  res.send(token);
});

app.listen(3000, () => console.log("Server running"));