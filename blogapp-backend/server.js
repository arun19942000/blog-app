const express = require("express");
const cors = require("cors");
const ArticleInfo = require("./src/model/BlogDB");
// require("dotenv").config();

const app = express();
var moment = require('moment');
app.use(cors());
const PORT = process.env.PORT || 5001;
// Post Method
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const path = require('path');
app.use(express.static('./build'));

// Basic Article Fetch Route
app.get("/api/article/:name", (req, res) => {
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  try {
    const articleName = req.params.name;
    ArticleInfo.findOne({ name: articleName }).then(function (article) {
      res.status(200).json(article);
    });
  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
});

// Upvotes Routing
app.post("/api/article/:name/upvotes", (req, res) => {
  const articleName = req.params.name;
  const filter = { name: articleName };
  const update = { $inc: { upvotes: 1 } };
  ArticleInfo.findOneAndUpdate(filter, update, { new: true }).then(function (
    article
  ) {
    res.json(article);
  });
});

// Comments Routing
app.post("/api/article/:name/comments", (req, res) => {
  const articleName = req.params.name;
  const { username, text } = req.body;
  // console.log(username);
  const filter = { name: articleName };
  const update = { $push: { comments: { username, text } } };
  ArticleInfo.findOneAndUpdate(filter, update, { new: true }).then(function (
    article
  ) {
    res.json(article);
  });
});
app.post("/signup", (req, res) => {
  console.log;
  const { username, email, password } = req.body;
  console.log(email);
});

// Port number
app.listen(PORT, () => {
  console.log("Listening on port 5001");
});
