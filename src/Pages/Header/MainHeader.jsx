import { Search } from '@mui/icons-material';
import { AppBar, Box, Button, Container, IconButton, InputBase, Toolbar, Typography } from '@mui/material'
import React from 'react'

const pages = ['Home', 'Contact', 'About', 'Sign Up'];
export const MainHeader = () => {
  return (
      <AppBar position="sticky" sx={{backgroundColor:"white", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'Poppins',
              fontWeight: 700,
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Exclusive
          </Typography>
    
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent:"center",}}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2,ml:3, color: 'black', display: 'block',fontFamily: 'Poppins' ,textTransform:"none"}}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0,
            display: "flex",
            alignItems: "center",
            backgroundColor: "#F5F5F5",
            borderRadius: "10px",
            overflow: "hidden", }} >
          <InputBase
            placeholder="What are you looking for?"
            sx={{
              fontSize: "14px",
              fontFamily: "Poppins",
              padding: "4px 8px",
              color: "#1E1E1E",
             width:"200px"
            }}
          />
          <IconButton
            sx={{
              color: "black",
              borderRadius: 0,
            }}
          >
            <Search />
          </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
