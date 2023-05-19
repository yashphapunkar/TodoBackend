const Todo = require('../models/Todos');

const updateTodo = async (req, res) => {
    
    try{

        const {id} = req.params;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id: id},
            {title, description, updatedAt: Date.now()}
        )


        res.status(200).json({
            sucess: true,
            data: todo,
            message: "updated sucessfully"
        })

    }
    catch(err){

        res.status(500).json({
             sucess: false,
             message: "Bad Gateway mannn"
        })
         
    }
}

module.exports = updateTodo;