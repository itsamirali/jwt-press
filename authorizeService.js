require("dotenv").config();
const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");

app.use(express.json());

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = {
    name: username,
  };

  const accessToken = generateAccessTokent(user);
  const refreshToken = jwt.sign(user.process.env.REFRESH_TOKEN_SECRET);
  res.json({ accessToken, refreshToken });
});

function generateAccessTokent(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
}

app.listen(3000);
