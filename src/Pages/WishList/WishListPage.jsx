import { Box, Typography } from "@mui/material";
import { useWishlist } from "../WishList/WishListContext";
import ImageCards from "../ReUsableComponents/ReusableCard";
import CustomBreadcrumbs from "../ReUsableComponents/BreadCrumb";
import { useGetProductByCategoryQuery } from "../../Features/productApiSlice";
import LoadingSkeleton from "../ReUsableComponents/FixedTextSkeleton";

const WishlistPage = () => {
  const { wishlist } = useWishlist();
  const {data:getProductByCategory,isLoading:categoryLoading,error:getCategoryError} = useGetProductByCategoryQuery(
      { category: 'electronics' }
    );
  const categoryData=getProductByCategory?.data.map((item) => ({
    id:item.id,
    imageSrc: item.image, 
    description:item.description,
    title: item.title, 
    category: item.category,
    price: item.price,
    rate: item.rate,
    ratingCount: item.ratingCount 
  })) || [];
  const breadcrumbsItems = [
      { name: "WishList-page" }
  ];
  return (
      <>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        marginTop: 4,
      }}
    >
      <span style={{marginRight:"1000px"}}><CustomBreadcrumbs items={breadcrumbsItems}/></span>
      {wishlist.length === 0 ? (
        <Typography sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f5f5f5',
            textAlign: 'center',
            padding: 0,
            margin: 0,
            width:"100%",
            fontFamily:"Poppins",
            fontSize:"48px"
        }}>No items in the wishlist</Typography>
      ) : (<Box> <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "black",
              fontFamily: "Poppins",
              fontSize: "18px",
              borderLeft: "10px solid black",
              padding: 1,
              marginLeft: "6px",
            }}
          >
            Wishlist({wishlist?.length})
          </Typography>
          </Box>
      )}
      <ImageCards  cardData={wishlist} /> 
    </Box>
      {categoryLoading? <LoadingSkeleton/>:(<Box> 
      <Typography
            variant="body1"
            color="initial"
            sx={{
              color: "#DB4444",
              fontFamily: "Poppins",
              fontSize: "18px",
              borderLeft: "10px solid #DB4444",
              padding: 1,
              marginLeft: "6px",
            }}
          >
           Just For You
          </Typography>
          </Box>)}
          <ImageCards  cardData={categoryData} /> 
          {(getCategoryError ) && (
          <h1 style={{ color: "red", fontSize: "24px", textAlign: "center" }}>
            An unexpected error occurred:{" "}
            {getCategoryError.error || "Unknown Error"}
          </h1>
        )}
    </>
  );
};

export default WishlistPage;
