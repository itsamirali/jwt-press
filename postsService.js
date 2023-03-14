require("dotenv").config();
const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");

app.use(express.json());

const fakePosts = [
  {
    author: "person one",
    username: "amirali",
    content: "some dummey text",
  },
  {
    author: "person two",
    username: "amirali",
    content: "other dummey text",
  },
];

app.get("/posts", authenticationMiddleWareToken, (req, res) => {
  res.json(fakePosts);
});



function authenticationMiddleWareToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const tokent = authHeader && authHeader.split(" ")[0];

  if (tokent == null) return res.sendStatus(401);

  jwt.verify(tokent, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
}

app.listen(3001);
