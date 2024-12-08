import React, { useEffect } from "react";
import {
      Box,
      Table,
      TableBody,
      TableCell,
      TableContainer,
      TableHead,
      TableRow,
      Typography,
      TextField,
      Button,
      Paper,
    } from "@mui/material";
import { useCart } from "./CartContext";
import CustomBreadcrumbs from "../ReUsableComponents/BreadCrumb";
import { useLocation, useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, updateQuantity,setCart, removeFromCart } = useCart();
const navigate = useNavigate()
  const subtotal = cart.reduce((total, item) => total + item.price*0.5 * item.quantity, 0);
  const shipping = 5; // Flat shipping rate
  const total = subtotal + shipping;
  const location = useLocation();
  const { updatedProduct } = location.state || {}; // Safely retrieve updated product

  useEffect(() => {
    if (updatedProduct) {
      // Find and update the product in your cart state
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === updatedProduct.id ? updatedProduct : item
        )
      );
    }
  }, [updatedProduct, setCart]);
  const breadcrumbsItems = [
      { name: "Cart" }
  ];
  const handleProceedToCheckout = () => {
      const checkoutData = {
        cart,
        subtotal,
        shipping,
        total,
      };
  
      navigate("/checkout", { state: checkoutData });
    };
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="p" gutterBottom>
        <CustomBreadcrumbs items={breadcrumbsItems} />
      </Typography>
      {cart.length === 0 ? (
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f5f5f5",
            textAlign: "center",
            padding: 0,
            margin: 0,
            width: "100%",
            fontFamily: "Poppins",
            fontSize: "48px",
          }}
        >
          Your cart is empty.
        </Typography>
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Subtotal</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell
                      onClick={() =>
                        navigate("/product-details", {
                          state: { product: item },
                        })
                      }
                      style={{cursor:'pointer'}}
                    >
                      <img
                        src={item.imageSrc}
                        alt={item.title}
                        width="80"
                        height="80"
                      />
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontFamily: "Poppins" }}>
                        {item?.title <= 40
                          ? item?.title
                          : `${item?.title.substring(0, 40)}... `}
                      </Typography>
                    </TableCell>
                    <TableCell>${(item.price * 0.5).toFixed(2)}</TableCell>
                    <TableCell>
                      <TextField
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value, 10))
                        }
                        inputProps={{ min: 1 }}
                        sx={{ width: "60px" }}
                      />
                    </TableCell>
                    <TableCell>
                      ${(item.price * 0.5 * item.quantity).toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <p style={{ marginTop: "8px" }}>
            <TextField placeholder="Coupon Code" style={{ padding: "6px" }} />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#DB4444",
                color: "white",
                textTransform: "none",
                marginTop: "12px",
              }}
            >
              Apply Coupon
            </Button>
          </p>
          {/* Cart Summary */}
          <TableContainer
            component={Paper}
            sx={{
              marginTop: "20px",
              marginLeft: "70%",
              marginRight: "auto",
              border: "1px solid black",
              boxShadow: "none",
              width: "25%",
            }}
          >
            <Table sx={{ tableLayout: "auto" }}>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography>Cart Total</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Subtotal</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography>${subtotal.toFixed(2)}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography>Shipping</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography>${shipping.toFixed(2)}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">Total</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">${total.toFixed(2)}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2} align="center">
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#DB4444",
                        color: "white",
                        textTransform: "none",
                        marginTop: "10px",
                      }}
                      onClick={handleProceedToCheckout}
                    >
                      Proceed to Checkout
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Box>
  );
};

export default CartPage;
