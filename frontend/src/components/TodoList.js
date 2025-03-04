import React, { useEffect, useState } from 'react'
import { Box, Button, IconButton, List, ListItem, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { Delete, Done } from '@mui/icons-material'

const API_URL = "http://localhost:8000/api/todos"

const TodoList = () => {

  const [todos,setTodos] = useState([])
  const [text,setText] = useState("")

  useEffect(()=>{
    axios.get(API_URL)
    .then((res)=>setTodos(res.data))
  },[])

  const handleAdd=async()=>{
    if(!text.trim()){
      return <Typography variant='h6'>Please write some todo</Typography>
    }
    const newTodo = {text,completed: false}
    const res = await axios.post(API_URL,newTodo)
    setTodos([...todos,res.data])
    setText("")
  }

  const handleToggle= async (id,completed)=>{
    const res = await axios.put(`${API_URL}/${id}`,{completed:!completed})
    setTodos(todos.map((t)=> t._id === id ? res.data : t))
  }
  const handleRemove=async(id)=>{
    await axios.delete(`${API_URL}/${id}`)
    setTodos(todos.filter((t)=>t._id !== id))
  }

  return (
    <Box sx={{mt:5,display:'flex',flexDirection:'column',mx:{xs:2,md:50}}}>
      <TextField
        label='Todo list'
        helperText="Please give a todo"
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />
      <Button variant='contained' onClick={handleAdd}>
        Add List
      </Button>
        <List>
        {todos.map((t)=>(
          <ListItem key={t._id}>
            <Typography variant='h6' sx={{textDecoration: t.completed ? 'line-through' : '',wordBreak:'break-word'}}>
              {t.text}
            </Typography>
            <IconButton sx={{color:'green'}} onClick={()=>handleToggle(t._id,t.completed)}>
              <Done />
            </IconButton>
            <IconButton sx={{color:'red'}} onClick={()=>handleRemove(t._id)}>
              <Delete />
            </IconButton>
          </ListItem>
        ))}
        </List>


    </Box>
  )
}

export default TodoList