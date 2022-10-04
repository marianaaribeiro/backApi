const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config/keys.config.js");
const TaskRoutes = require("./routes/Task");
const cors = require("cors");

const app = express();

mongoose
  .connect(config.mongodbUri)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error on connection", err));

app.use(bodyParser.json());
app.use(cors());

app.use("/api/home", TaskRoutes);

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log("Server listening on port " + port);
});
