const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "ToDoList API",
    description: "contact information API",
  },
  host: "project2-am.onrender.com",
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
