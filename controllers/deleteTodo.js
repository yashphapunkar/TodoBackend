const Todo = require('../models/Todos');


const deleteTodo = async (req, res) => {
    
    const id = req.params.id;
    const  todo = await Todo.findByIdAndDelete({ _id: id});

    res.status(200).json({
       sucess: true,
       data: todo,
       message: "This todo is deleted Sucessfully",
    })
}

module.exports = deleteTodo