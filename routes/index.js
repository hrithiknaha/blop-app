const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("Welcome to Backend").status(200);
});

module.exports = router;
