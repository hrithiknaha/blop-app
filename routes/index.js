const express = require("express");
const Blogs = require("../models/Blogs.js");

const router = express.Router();

router.get("/blogs", (req, res) => {
  Blogs.find({}, (err, blogs) => {
    if (err)
      return res.json({ err: `Error while fetching all blog post : ${err}` });
    if (blogs.length === 0)
      return res.json({ msg: "No Blog Post found" }).status(200);
    return res.json(blogs).status(200);
  });
});

router.post("/blogs", (req, res) => {
  const blog = new Blogs(req.body);
  blog.save((err, blog) => {
    if (err) return res.json({ err: `Error while saving blog post : ${err}` });
    return res.json(blog).status(200);
  });
});

router.put("/blog/:id", (req, res) => {
  Blogs.findByIdAndUpdate(req.params.id, req.body, (err, updatedBlog) => {
    if (err)
      return res.json({ err: `Error while updating blog post : ${err}` });
    return res.json(updatedBlog).status(200);
  });
});

router.delete("/blog/:id", (req, res) => {
  Blogs.findByIdAndDelete(req.params.id, (err, deletedBlog) => {
    if (err)
      return res.json({ err: `Error while delating blog post : ${err}` });
    return res.json(deletedBlog).status(200);
  });
});

module.exports = router;
