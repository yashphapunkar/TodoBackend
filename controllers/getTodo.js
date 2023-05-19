const { default: mongoose } = require('mongoose');
const Todo = require('../models/Todos')

//deifne route handler
const getTodo = async (req, res) => {

    try{
       //fetch all todo items from database
       const allTodos = await Todo.find({});

       //response 
       res.status(200).json({
        sucess: true,
        data: allTodos,
        messagee: "congrats you got all todos now entire todo data is fetched"
       })
    }
    catch(err){
         console.error(err.message);
         res.status(500).json({
            sucess: false,
            error: err.message,
            message: "Internal Server Error",
         })
    }
}


const getTodoById = async (req, res) => {
      try{

         const id = req.params.id;
         const todo = await Todo.findById({_id: id});
        

         if(!todo){
           return  res.status(404).json({
                sucess: false,
                message: "error 404 not found"
            })
         }

         res.status(200).json({
            sucess: true,
            data: todo,
            message: "your request is accepted"
         })

      }
      catch(err){
        res.status(500).json({
            sucess: false,
            message:err.message,
        })

      }
}


module.exports = {getTodoById, getTodo};
