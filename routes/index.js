const express = require("express");
const Blogs = require("../models/Blogs.js");

const router = express.Router();

router.get("/blogs", (req, res) => {
  Blogs.find({}, (err, blogs) => {
    if (err) return console.log(`Error while fetching all blog post : ${err}`);
    if (blogs.length === 0) return res.json("No Blog Post found");
    return res.json(blogs).status(200);
  });
});

router.post("/blog/new", (req, res) => {
  const blog = new Blogs(req.body);
  blog.save((err, blog) => {
    if (err) return console.log(`Error while saving blog post : ${err}`);
    return res.json(blog).status(200);
  });
});

module.exports = router;
