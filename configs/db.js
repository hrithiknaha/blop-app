const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

module.exports = mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB has been connected"))
  .catch((err) => console.log(`DB connection fail : ${err}`));
