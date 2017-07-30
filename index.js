const express = require('express');
const bodyParser = require('body-parser');
const todoController = require('./controllers/todoController.js')

const app = express();

app.set("view engine",'ejs');

app.use(express.static("./public"));

todoController(app);

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})