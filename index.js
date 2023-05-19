
const express = require('express');
const app  = express();


//load config file
require('dotenv').config();
const PORT = process.env.PORT || 4000;

//midlleware to parse json body
app.use(express.json());

//import routes for todo api 
const todoRoutes = require('./routes/todos');
app.use('/api/v1', todoRoutes);

//start server
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})

//connecting databse
const dbConect = require('./config/database');
dbConect(); 

//default route
app.get('/', (req, res) => {
    res.send('<h1> This is a Homepage </h1>');
})