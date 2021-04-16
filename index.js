const express = require("express");
const routes = require("./routes/index");

const app = express();
// const PORT = 3000;
app.use(express.json());
app.use("/", routes);

//error handling using next middleware
app.use((err, req, res, next) => {
  res.send(err);
});

// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
