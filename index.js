const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

// START APP
const app = express();
app.use(express.json());
app.use(cors());

// CONECT DB

mongoose.connect("mongodb://root:root1234@ds137255.mlab.com:37255/example-api-nodejs",
{ useNewUrlParser: true });

requireDir("./src/models");

// INITIALIZE ROUTES
app.use("/api", require("./src/routes"));

app.listen(3000);
