const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config({ path: "./.env" });
// const app = require("./app");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

////////////////////////////////////////////

// const express = require("express");
// const bodyParser = require("body-parser");
// const mongodb = require("./db/connect");

// const port = process.env.PORT || 8080;
// const app = express();

// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");

// app
//   .use(bodyParser.json())
//   .use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     next();
//   })
//   .use("/", require("./routes"));

// mongodb.initDb((err, mongodb) => {
//   if (err) {
//     console.log(err);
//   } else {
//     app.listen(port);
//     console.log(`Connected to DB and listening on ${port}`);
//   }
// });
