import { Search } from '@mui/icons-material';
import { AppBar, Badge, Box, Button, Container, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import shopingIcon from '../../Assets/header/Cart1.png'
import loveIcon from '../../Assets/header/Vector.png'
import userIcon from '../../Assets/header/user.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useWishlist } from '../WishList/WishListContext';
import { useCart } from '../Cart/CartContext';
import Cancel from '../../Assets/userSetting/icon-cancel.png'
import Logout from '../../Assets/userSetting/Icon-logout.png'
import mailBag from '../../Assets/userSetting/icon-mallbag.png'
import Review from '../../Assets/userSetting/Icon-Reviews.png'
import user from '../../Assets/userSetting/user.png'
import { ErrorContext } from '../ToastErrorPage/ErrorContext';
const pages = ['Home', 'Contact', 'About', 'Sign Up'];
export const MainHeader = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  const {showSuccess} = useContext(ErrorContext)
  const navigate = useNavigate()
  useEffect(() => {
    const username = localStorage.getItem('username');
    const loggedIn = !!username; // Boolean conversion
    setIsLoggedIn(loggedIn); 
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const [iconBackground, setIconBackground] = useState(""); // To control background color

  const handleIconClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIconBackground("#DB4444");
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIconBackground(""); 
  };

  const handleMenuItemClick = (action) => {
    handleClose(); 
    // Perform the specific action based on the clicked item
    switch (action) {
      case "manageAccount":
        navigate('/account')
        break;
      case "myOrders":
        navigate('/my-order')
        break;
      case "myCollection":
        navigate('/cart')
        break;
      case "myReview":
        // Navigate to reviews page or handle logic
        console.log("My Reviews");
        break;
      case "logOut":
        showSuccess("You are Logged Out!");
        localStorage.setItem("username", "");
        localStorage.setItem("orders", "[]");
        localStorage.setItem("token", "");
        localStorage.setItem("formData", "{}");
        setIsLoggedIn(false)
        setTimeout(() => {
          navigate("/login");
        }, 5000);
        break;
      default:
        break;
    }
  };
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "Poppins",
              fontWeight: 700,
              color: "black",
              textDecoration: "none",
            }}
          >
            Exclusive
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            {pages.map((page) =>
              page === "Sign Up" && isLoggedIn ? null : (
                <Button
                  key={page}
                  component={Link}
                  to={
                    page === "Sign Up"
                      ? "/"
                      : `/${page.replace(/\s+/g, "").toLowerCase()}`
                  }
                  sx={{
                    my: 2,
                    ml: 3,
                    color: "black",
                    display: "block",
                    fontFamily: "Poppins",
                    textTransform: "none",
                    borderBottom:
                      location.pathname ===
                      `/${page.replace(/\s+/g, "").toLowerCase()}`
                        ? "2px solid black"
                        : "none",
                  }}
                >
                  {page}
                </Button>
              )
            )}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              alignItems: "center",
              backgroundColor: "#F5F5F5",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <InputBase
              placeholder="What are you looking for?"
              sx={{
                fontSize: "14px",
                fontFamily: "Poppins",
                padding: "4px 8px",
                color: "#1E1E1E",
                width: "200px",
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
          {isLoggedIn && (
            <Box ml={4}>
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
                  <img
                    src={loveIcon}
                    height={26}
                    width={26}
                    alt="favoriteIcon"
                  />
                </Badge>
              </IconButton>
              <IconButton onClick={() => navigate("/cart")}>
                <Badge
                  badgeContent={cart?.length}
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "white",
                      backgroundColor: "error.main",
                      top: 5,
                    },
                  }}
                >
                  <img
                    src={shopingIcon}
                    height={32}
                    width={32}
                    alt="shopping cart icon"
                  />
                </Badge>
              </IconButton>
              <IconButton
                onClick={handleIconClick}
                sx={{ backgroundColor: iconBackground }}
              >
                <img src={userIcon} height={32} width={32} alt="user icon" />
              </IconButton>
            </Box>
          )}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            PaperProps={{
              sx: {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                color: "white",
                borderRadius: "8px",
              },
            }}
          >
            <MenuItem onClick={() => handleMenuItemClick("manageAccount")}>
              <img
                src={user}
                height={32}
                width={32}
                alt="user icon"
                style={{ padding: "6px" }}
              />
              Manage My Account
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("myOrders")}>
              <img
                src={mailBag}
                height={24}
                width={24}
                alt="bag icon"
                style={{ padding: "6px" }}
              />
              My Orders
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("myCollection")}>
              <img
                src={Cancel}
                height={24}
                width={24}
                alt="cancel icon"
                style={{ padding: "6px" }}
              />
              My Collection
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("myReview")}>
              <img
                src={Review}
                height={24}
                width={24}
                alt="review icon"
                style={{ padding: "6px" }}
              />
              My Reviews
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("logOut")}>
              <img
                src={Logout}
                height={24}
                width={24}
                alt="logout icon"
                style={{ padding: "6px" }}
              />
              Log Out
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
