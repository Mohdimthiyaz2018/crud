const express = require("express");
const app = express();
const cookies = require("cookie-parser");
const error = require("./Middlewares/error");
const tasks = require('./Routes/taskRoute');

app.use(express.json());
app.use(cookies());

app.use('/crud/',tasks);
app.use(error);

module.exports = app;
