require("dotenv").config();
const authMiddleWare = require("./middelWare");
const express = require("express");
const app = express();

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

app.get("/posts", authMiddleWare.middleWare, (req, res) => {
  res.json(fakePosts);
});

app.listen(3001);
