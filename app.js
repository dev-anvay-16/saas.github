const path = require("path");
const express = require('express');

const app = express();

app.get('/' , (req,res,next) => {
    res.send('<h1>Hello World</h1>');
    console.log("Working")
})

app.listen(8080);