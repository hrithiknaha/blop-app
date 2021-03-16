//consting packages
const express = require("express");
const methodOverride = require("method-override");

if (process.env.NODE_ENV === "development") require("./configs/db.js");

const app = express();

app.use(express.json());
app.use(methodOverride("_method"));

//Routes Calling
app.use("/api", require("./routes/index"));
app.use("/api", require("./routes/blog"));

module.exports = app;
