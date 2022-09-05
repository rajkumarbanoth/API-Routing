const express = require("express");
const app = express();

export.app = app.get("/", (request, response) => {
  response, send("Home Page");
});

export.app = app.get("/about", (request, response) => {
  response, send("About Page");
});

app.listen(3000);
