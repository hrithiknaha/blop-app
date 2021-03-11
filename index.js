//consting packages
const express = require("express");
const methodOverride = require("method-override");

const app = express();

require("./configs/db.js");

app.use(express.json());
app.use(methodOverride("_method"));

//Routes Calling
app.use("/api", require("./routes/index"));

//Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
