import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Box, createTheme, ThemeProvider } from '@mui/material'
import TodoList from './components/TodoList'

const App = () => {

  const [theme,setTheme] = useState('light')
  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
      <BrowserRouter>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<TodoList />} />
      </Routes>
      </BrowserRouter>
      </Box>
    </ThemeProvider>
  )
}

export default App