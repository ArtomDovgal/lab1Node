const express = require('express');
require('dotenv').config();
const app = express();

app.use("/", (req, res) => {
    res.send("<h1>" + process.env.FULLNAME.trim() + "<h1>");
    res.end();

});

module.exports = app;
// {message: "Hello World"}
// require('dotenv').config();