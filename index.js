//consting packages
const express = require("express");

const app = express();

require("./configs/db.js");

app.use(express.json());

//Routes Calling
app.use("/", require("./routes/index"));

//Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
