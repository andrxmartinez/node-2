const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");

const app = express();
dotenv.config({ path: "./.env" });
// const app = require("./app");

app.use(routes);
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    const port = process.env.PORT || 8080;
    app.listen(port, () => {
      console.log(`App running on port ${port}...`);
    });
  });

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
