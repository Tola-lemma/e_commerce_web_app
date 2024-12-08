import { Search } from '@mui/icons-material';
import { AppBar, Badge, Box, Button, Container, IconButton, InputBase, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import shopingIcon from '../../Assets/header/Cart1.png'
import loveIcon from '../../Assets/header/Vector.png'
import userIcon from '../../Assets/header/user.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useWishlist } from '../WishList/WishListContext';
const pages = ['Home', 'Contact', 'About', 'Sign Up'];
export const MainHeader = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { wishlist } = useWishlist();
  const navigate = useNavigate()
  useEffect(() => {
    const username = localStorage.getItem('username');
    const loggedIn = !!username; // Boolean conversion
    setIsLoggedIn(loggedIn); 
  }, []);
  return (
      <AppBar position="sticky" sx={{backgroundColor:"white", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
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
    
             {/* Navigation Links */}
             <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {pages.map((page) =>
              page === 'Sign Up' && isLoggedIn ? null : (
                <Button
                  key={page}
                  component={Link}
                  to={page === 'Sign Up' ? '/':`/${page.replace(/\s+/g, '').toLowerCase()}`} 
                  sx={{
                    my: 2,
                    ml: 3,
                    color: 'black',
                    display: 'block',
                    fontFamily: 'Poppins',
                    textTransform: 'none',
                    borderBottom:
                      location.pathname === `/${page.replace(/\s+/g, '').toLowerCase()}` ? '2px solid black' : 'none',
                  }}
                >
                  {page}
                </Button>
              )
            )}
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
         {isLoggedIn&&<Box ml={4}>
          <IconButton onClick={() => navigate("/wishlist")}>
            <Badge
              badgeContent={wishlist?.length}
              sx={{
                "& .MuiBadge-badge": {
                  color: "white",
                  backgroundColor: "error.main",
                  top: 5,
                },
              }}
            >
              <img src={loveIcon} height={26} width={26} alt='favoriteIcon' />
            </Badge>
            </IconButton>
            <IconButton>
            <Badge
              badgeContent={2}
              sx={{
                "& .MuiBadge-badge": {
                  color: "white",
                  backgroundColor: "error.main",
                  top: 5,
                },
              }}
            >
              <img src={shopingIcon} height={32} width={32} alt='shopping cart icon'/>
            </Badge>
            </IconButton>
            <IconButton>
              <img src={userIcon} height={32} width={32}  alt='user icon'/>
            </IconButton>
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
