import * as React from "react";
import { Box, Rating, Typography } from "@mui/material";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { RemoveRedEye } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import  {useWishlist} from '../WishList/WishListContext'
import { useCart } from "../Cart/CartContext";
// import { useAddToCartMutation } from "../../Features/cartApiSlice";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
export default function ImageCards({cardData}) {
  const { wishlist, toggleWishlist } = useWishlist();
  const { cart, addToCart } = useCart();
  const navigate = useNavigate();
  // const [carts,setCarts]=React.useState('')
  // const {addToCart:addtoCartAPI } = useAddToCartMutation()
  return (
    <Box
      sx={{
        display: "flex",
        // justifyContent: "space-evenly",
        alignItems: "stretch", // Ensures cards stretch equally
        padding: "40px",
        marginTop: "16px",
        flexWrap: "wrap",
        gap: "16px",
        marginLeft: "10px",
      }}
    >
      {cardData?.map((card, index) => (
        <Card
          key={index}
          sx={{
            width: 290,
            height: 370,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "16px",
            position: "relative",
            boxShadow: "none",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 20,
              left: 250,
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
              fontWeight:"bolder"
            }}
          >
            <Checkbox
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "50%", // Optional: Makes the checkbox background circular
              }}
              {...label}
              icon={<FavoriteBorder sx={{ width: 20, height: 20 }} />}
              checked={wishlist.some((item) => item.id === card.id)} // Check if the card is in the wishlist
              onClick={() => toggleWishlist(card)} // Add the card to the wishlist
              checkedIcon={<Favorite />}
            />
            <Checkbox
              sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "50%", // Optional: Makes the checkbox background circular
              }}
              {...label}
              icon={<RemoveRedEye sx={{ width: 20, height: 20 }} />}
            />
          </Box>
          {/* Image Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: 180, // Fixed height for image area
              width: "290px",
              backgroundColor: "#F2F2F2",
              borderRadius: "4px",
              marginTop: "10px",
              cursor: "pointer",
            }}
            onClick={() =>
              navigate("/product-details", { state: { product: card  } })
            }
          >
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
               mixBlendMode:"multiply"
              }}
              src={card?.imageSrc}
              alt={card?.title}
            />
          </Box>
          {/* Card Content */}
          <CardContent
            sx={{
              width: "100%",
              textAlign: "left",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: "-1.3rem",
              flexGrow: 1, // Makes content take up available space
            }}
          >
            <Button
              disabled={cart.some((item) => item.id === card.id)}
              size="large"
              sx={{
                backgroundColor: "black",
                color: "white",
                textTransform: "none",
                "&:disabled": {
                  backgroundColor: "#DB4444", 
                  color:'wheat'
                },
              }}
              onClick={() => addToCart(card)}
            >
              {cart.some((item) => item.id === card.id) ? "Added to cart" : "Add to Cart"}
            </Button>
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              mt={1}
              sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
            >
              {card?.title.length <= 10
                ? card?.title
                : `${card?.title.substring(0, 10)}... `}
              {card?.title.length > 10 && (
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => navigate("/product-details", { state: { product: card } })}
                >
                  more
                </span>
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", fontFamily: "Poppins" }}
            >
              {card.category}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "error.main",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              ${card?.price * 0.5}{" "}
              <span
                style={{
                  textDecoration: "line-through",
                  color: "#808080",
                  fontSize: "15px",
                  marginLeft: "10px",
                }}
              >
                ${card?.price}
              </span>
            </Typography>
            <span style={{ display: "flex" }}>
              <Rating
                name="size-small"
                defaultValue={card?.rate}
                size="small"
                max={5}
              />
              <span style={{ color: "white" }}> - </span>({card?.ratingCount})
            </span>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
