//server.js
const app = require("./app");

//Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `Server is listening on port ${PORT} | ${process.env.NODE_ENV} environment`
  )
);

module.exports = app;
