const swaggerAutogen = require("swagger-autogen")();
// const appConfig = require("./config/app");

const doc = {
  info: {
    title: "ToDoList API",
    description: "contact information API",
  },
  host: "project2-am.onrender.com",
  schemes: ["http", "https"],
  securityDefinitions: {
    Authorization: {
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT",
      description: "JWT Authorization header using the Bearer scheme.",
    },
  },
  security: [
    {
      BearerAuth: [],
    },
  ],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
