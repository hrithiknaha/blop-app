//consting packages
const express = require("express");
const methodOverride = require("method-override");

const app = express();

require("./configs/db.js");

app.use(express.json());
app.use(methodOverride("_method"));

//Routes Calling
app.use("/api", require("./routes/index"));
app.use("/api", require("./routes/blog"));

module.exports = app;
