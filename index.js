const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

requireDir("./src/models");

// START APP
const app = express();
app.use(express.json());
app.use(cors());

// CONECT DB

/* Set data of connection with DB
* Example: "mongodb://root:root@localhost:37027/starter-nodejs-mongoose"
*/
mongoose.connect("mongodb://<user>:<password>@<url:port>/<name_db>",
{ useNewUrlParser: true });

// INITIALIZE ROUTES
app.use("/api", require("./src/routes"));

app.listen(3000);
