"user strict";


//module
const express = require("express");
const app = express();

const PORT = 8080;
//routing
const home = require("./routes/home");

//app setting
app.set("views", "./views" );
app.set("view engine", "ejs");

app.use("/", home); //use는 미들웨어를 등록해주는 매서드

module.exports = app;
