import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Card, Checkbox, Rating, IconButton } from "@mui/material";
import CustomBreadcrumbs from "../ReUsableComponents/BreadCrumb";
import { Add, Brightness1Sharp, Favorite, FavoriteBorder, Remove } from "@mui/icons-material";
import { useState } from "react";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Safely retrieve product data
  const [quantity, setQuantity] = useState(1); 
  const breadcrumbsItems = [
        { name: "Product" }, 
      { name: product?.category }, 
      { name: product?.title }, 
    ];
    const totalPrice = product?.price * quantity;
    const discountedPrice = totalPrice * 0.5;
    const handleIncrease = () => setQuantity((prev) => prev + 1);
    const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    // buttons below carts details 
    const navigate = useNavigate()
    const handleBuyNow = () => {
        const { title, category, imageSrc } = product;
        navigate("/checkout", {
          state: {
            title,
            category,
            price: discountedPrice.toFixed(2),
            imageSrc,
          },
        });
      };
  return (
    <Box mt={6} mb={6}>
      <CustomBreadcrumbs items={breadcrumbsItems} />
      {product ? (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#fff",
                marginLeft: "6px",
                borderRadius: "12px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "stretch", // Ensures cards stretch equally
                  padding: "2px",
                  marginTop: "16px",
                }}
              >
                <Card
                  // key={index}
                  sx={{
                    width: 430,
                    height: 450,
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "none",
                    alignItems: "center",
                    marginBottom: "14px",
                  }}
                >
                  {/* Image Section */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 330, // Fixed height for image area
                      width: "410px",
                      backgroundColor: "#F2F2F2",
                      borderRadius: "12px",
                      marginTop: "10px",
                    }}
                  >
                    <img
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                        borderRadius: "12px",
                        mixBlendMode:"multiply"
                      }}
                      src={product?.imageSrc}
                      alt={product?.title}
                    />
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "18px",
                      display: "flex",
                      flexDirection: "row",
                      gap: "15px", // Space between images
                      padding: "8px",
                      color: "#808080",
                      marginLeft: "-95px",
                      "&:hover": {
                        color: "#882BEC",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <img
                      src={product?.imageSrc}
                      alt="sub image1"
                      style={{
                        width: "64px",
                        height: "64px",
                        objectFit: "fill",
                        borderRadius: "8px",
                        backgroundColor: "#F2F2F2",
                      }}
                    />
                    <img
                      src={product?.imageSrc}
                      alt="sub image2"
                      style={{
                        width: "64px",
                        height: "64px",
                        objectFit: "fill",
                        borderRadius: "8px",
                        backgroundColor: "#F2F2F2",
                      }}
                    />
                    <img
                      src={product?.imageSrc}
                      alt="sub image3"
                      style={{
                        width: "64px",
                        height: "64px",
                        objectFit: "fill",
                        borderRadius: "8px",
                        backgroundColor: "#F2F2F2",
                      }}
                    />
                    <img
                      src={product?.imageSrc}
                      alt="sub image4"
                      style={{
                        width: "64px",
                        height: "64px",
                        objectFit: "fill",
                        borderRadius: "8px",
                        backgroundColor: "#F2F2F2",
                      }}
                    />
                  </Box>
                </Card>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "2px",
                  marginTop: "16px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      fontSize: 24,
                    }}
                  >
                    {product?.title}
                  </Typography>
                </Box>
                <Typography style={{ color: "#808080", padding: 1 }}>
                  <Rating
                    name="size-small"
                    defaultValue={product?.rate}
                    size="small"
                    max={5}
                  />
                  {product?.rate}+ rating{" "}
                  <span>({product.ratingCount} Reviews)</span> ||{" "}
                  <span style={{ color: "#00FF66" }}> In Stock</span>
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      marginRight: "8px",
                    }}
                  >
                    {/* ${item?.price} */}${discountedPrice.toFixed(2)}
                  </span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#808080",
                      fontSize: "16px",
                      marginRight: "8px",
                    }}
                  >
                    ${totalPrice.toFixed(2)}
                  </span>

                  {/* Discount */}
                  <span
                    style={{
                      backgroundColor: "#D4EDDA",
                      color: "#28A745",
                      fontSize: "14px",
                      padding: "2px 6px",
                      borderRadius: "4px",
                    }}
                  >
                    -50%
                  </span>
                </Typography>
                <Typography
                  variant="body1"
                  mt={1}
                  sx={{
                    padding: 1,
                    fontFamily: "Poppins",
                    textAlign: "left",
                    width: "80%",
                    borderBottom: "1px solid #1e1e1e",
                  }}
                >
                  {product.description}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }} mt={2}>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
                  >
                    Size:
                  </Typography>
                  <Button
                    style={{
                      borderRadius: "8px",
                      border: "1px solid black",
                      width: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 14px",
                      marginLeft: "8px", // Optional: Adds space between the text and the button
                    }}
                  >
                    XS
                  </Button>
                  <Button
                    style={{
                      borderRadius: "8px",
                      border: "1px solid black",
                      width: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 14px",
                      marginLeft: "8px", // Optional: Adds space between the text and the button
                    }}
                  >
                    S
                  </Button>
                  <Button
                    style={{
                      borderRadius: "8px",
                      border: "1px solid black",
                      width: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 14px",
                      marginLeft: "8px", // Optional: Adds space between the text and the button
                    }}
                  >
                    M
                  </Button>
                  <Button
                    style={{
                      borderRadius: "8px",
                      border: "1px solid black",
                      width: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 14px",
                      marginLeft: "8px", // Optional: Adds space between the text and the button
                    }}
                  >
                    L
                  </Button>
                  <Button
                    style={{
                      borderRadius: "8px",
                      border: "1px solid black",
                      width: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 14px",
                      marginLeft: "8px", // Optional: Adds space between the text and the button
                    }}
                  >
                    XL
                  </Button>
                  <Button
                    style={{
                      borderRadius: "8px",
                      border: "1px solid black",
                      width: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 14px",
                      marginLeft: "8px", // Optional: Adds space between the text and the button
                    }}
                  >
                    L
                  </Button>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }} mt={2}>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
                  >
                    Color: <span style={{ color: "white" }}> -- </span>
                  </Typography>
                  <Brightness1Sharp sx={{ color: "#00FF66" }} />
                  <Brightness1Sharp sx={{ color: "#4444FF" }} />
                  <Brightness1Sharp sx={{ color: "#FF4646" }} />
                  <Brightness1Sharp sx={{ color: "#1E1E1E" }} />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }} mt={4}>
                  <Box
                    sx={{ border: "1px solid #1E1E1E", borderRadius: "8px" }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
                    ></Typography>
                    <IconButton>
                      {" "}
                      <Remove
                        onClick={handleDecrease}
                        sx={{
                          backgroundColor: "#DB4444",
                          color: "white",
                          width: "60px",
                        }}
                      />
                    </IconButton>
                    <IconButton>{quantity}</IconButton>
                    <IconButton>
                      <Add
                        onClick={handleIncrease}
                        sx={{
                          backgroundColor: "green",
                          color: "white",
                          width: "60px",
                        }}
                      />
                    </IconButton>
                  </Box>
                  <Button
                    onClick={handleBuyNow}
                    style={{
                      borderRadius: "8px",
                      width: "130px",
                      display: "flex",
                      height: "50px",
                      backgroundColor: "#DB4444",
                      textTransform: "none",
                      color: "white",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 14px",
                      marginLeft: "8px", // Optional: Adds space between the text and the button
                    }}
                  >
                    Buy Now
                  </Button>
                  <Checkbox
                    sx={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid black",
                      marginLeft: "8px",
                    }}
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                </Box>
                <p
                  style={{
                    textAlign: "left",
                    color: "#006200",
                    fontSize: 18,
                    fontFamily: "Poppins",
                  }}
                >
                  Pickup & Pay 
                </p>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <Typography
          component={"h1"}
          sx={{
            color: "red",
            textAlign: "center",
            fontSize: "24px",
            fontFamily: "Poppins",
          }}
        >
          No product data available.
        </Typography>
      )}
    </Box>
  );
};

export default ProductDetails;
