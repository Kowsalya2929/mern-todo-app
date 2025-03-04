const express = require('express')
const Todo = require('../models/todoModel')

const router = express.Router()

router.get('/', async(req,res)=>{
    const todos = await Todo.find();
    res.json(todos)
})

router.post('/', async (req, res) => {
    try {
        if (!req.body.text) {
            return res.status(400).json({ message: 'Text is required' });
        }
        const newTodo = new Todo(req.body);
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ message: 'Error creating todo', error });
    }
});

router.put('/:id',async (req,res)=>{
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.json(updatedTodo)
})

router.delete('/:id',async(req,res)=>{
    await Todo.findByIdAndDelete(req.params.id)
    res.json({messge : 'Todo deleted'})
})

module.exports = router;