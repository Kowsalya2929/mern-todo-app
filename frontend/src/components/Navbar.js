import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { DarkMode, LightMode } from '@mui/icons-material'
const Navbar = ({theme,setTheme}) => {
  return (
    <Box>
      <AppBar position='sticky'>
        <Toolbar sx={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
          <Typography variant='h6' fontWeight='bold'>
            TODO LIST 
          </Typography>
          <IconButton onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar