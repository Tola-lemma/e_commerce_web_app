import { Box, Button, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import ImageCards from '../ReUsableComponents/ReusableCard';
import LoadingSkeleton from '../ReUsableComponents/FixedTextSkeleton';
import { useNavigate } from 'react-router-dom';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useGetAllProductQuery } from '../../Features/productApiSlice';
import exploreImage from '../../Assets/home/Frame 600.png'
export const Explore = () => {
      const [page, setPage] = useState(1); // Start from page 1
      const cardsPerPage = 4; // Number of cards to display at once
      const [viewAll, setViewAll] = useState(false);
      const navigate = useNavigate()
      const {data:products,isLoading:isLoadingProduct, error:errorProduct } = useGetAllProductQuery()
     
      const cardData =
      products?.data.map((item) => ({
          id:item.id,
          imageSrc: item.image, 
          description:item.description,
          title: item.title, 
          category: item.category,
          price: item.price,
          rate: item.rate,
          ratingCount: item.ratingCount 
        })) || [];
        const paginatedData = cardData.slice(
            (page - 1) * cardsPerPage,
            page * cardsPerPage
          );
          
          const totalPages = Math.ceil(cardData.length / cardsPerPage);
          
          const handleNext = () => {
            if (page < totalPages) setPage((prevPage) => prevPage + 1);
          };
          
          const handlePrev = () => {
            if (page > 1) setPage((prevPage) => prevPage - 1);
          };
          
  return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection:"column"
        }}
        mt={6}
        mb={6}
      >
            <img width={1170} height={500} src={exploreImage} alt='explore'  style={{
    cursor: "pointer",
    display: "block",
    margin: "0 auto", 
  }}  onClick={()=>navigate('/home')}/>
             {isLoadingProduct ? (
          <LoadingSkeleton />
        ) : (
          <>
            <Box mt={18}>
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
                Our Product's
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                    fontSize: "36px",
                    padding: 1,
                    lineHeight: "48px",
                    letterSpacing: "4%",
                  }}
                >
                  Explore Our Products
                </Typography>
                <p style={{ marginRight: 8 }}>
                  <IconButton
                    onClick={handlePrev}
                    disabled={page === 1 || viewAll}
                  >
                    <ArrowBack />
                  </IconButton>
                  <IconButton
                    onClick={handleNext}
                    disabled={page === totalPages || viewAll}
                  >
                    <ArrowForward />
                  </IconButton>
                </p>
              </Box>
            </Box>
            <ImageCards cardData={viewAll ? cardData : paginatedData} />
            {/* Show All Button */}
            <Box textAlign="center">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#DB4444",
                  textAlign: "center",
                  textTransform: "none",
                }}
                onClick={() => {
                  setViewAll(!viewAll);
                  if (viewAll) setPage(1);
                }}
              >
                {viewAll ? "View Less" : "View All Products"}
              </Button>
            </Box>
          </>
        )}
        {(errorProduct ) && (
          <h1 style={{ color: "red", fontSize: "24px", textAlign: "center" }}>
            An unexpected error occurred:{" "}
            {errorProduct.error || "Unknown Error"}
          </h1>
        )}
      </Box>
  )
}
