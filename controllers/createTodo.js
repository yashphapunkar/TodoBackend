//import the model 
const Todo = require("../models/Todos");


//define route handler each route is mapped for a specific function for that we use route handler
const createTodo = async (req, res) => {
   try {
        //extract title and des from request use destructuring parser will be in server.js or index.js
        const {title, description} = req.body;
        //create a new todo object and inserting it in databse
        const response  = await Todo.create({ title,description});
        //send a json reponse 
        res.status(200).json({
            sucress: true,
            data: response,
            message: "Entry Created Sucessfully!"
        })


   }
   catch(err){
    console.log(err);
    res.status(500).json({
        sucess: false,
        data: "Internal Server Error",
        message: err.message,
    })

   }
}

module.exports = createTodo;