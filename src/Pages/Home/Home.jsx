import React, { useState,useEffect,useCallback ,useMemo } from 'react'
import { Box, Button, IconButton, Typography } from '@mui/material'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import HomePageImg from '../../Assets/home/Frame 560.png'
import HomePageImg2 from '../../Assets/home/shopnow.png'
import HomePageImg3 from '../../Assets/home/wirelessheadphone.png'
import { useGetAllProductQuery, useGetProductByCategoryQuery, useGetProductCategoryQuery } from '../../Features/productApiSlice';
import { ArrowBack, ArrowForward, Boy, Diamond, ElectricalServices, Girl, KeyboardArrowRight } from '@mui/icons-material';
import ImageCards from '../ReUsableComponents/ReusableCard.jsx'
import SkeletonCategory from '../ReUsableComponents/ReUsableCategorySkeleton.jsx';
import LoadingSkeleton from '../ReUsableComponents/FixedTextSkeleton.jsx';
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from 'react-router-dom';
import { Explore } from './Explore.jsx';
const Home = () => {
  const [page, setPage] = useState(1); // Start from page 1
  const cardsPerPage = 4; // Number of cards to display at once
  const [viewAll, setViewAll] = useState(false);
  const navigate = useNavigate()
  const { data: categories, error, isLoading }  = useGetProductCategoryQuery();
  const {data:products,isLoading:isLoadingProduct, error:errorProduct } = useGetAllProductQuery()
  const [selectedCategory, setSelectedCategory] = useState("electronics");
  const {data:getProductByCategory,isLoading:categoryLoading,error:getCategoryError} = useGetProductByCategoryQuery(
    { category: selectedCategory }, // Pass selected category to API query
    { skip: !selectedCategory }
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
 const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Set selected category on button click
  };
  const browseHandlerbyId = (category)=>{
    setSelectedCategory(category);
  }
 // Calculate the data to display for the current page
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


   // Memoize the targetDate to ensure it remains consistent across renders
   const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 5); // 5 days from now
    return date;
  }, []); // Empty dep ensures targetDate is only calculated once

  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }
    return null; // Countdown expired
  }, [targetDate]); //it won't trigger unnecessary recalculations
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft()); // Recalculate time left every second
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval
  }, [calculateTimeLeft]);
  if (!timeLeft) {
    return (
      <Typography
        variant="body1"
        color="error"
        sx={{ fontWeight: "bold", fontFamily: "Poppins", fontSize: "36px" }}
      >
        Flash Sale Ended!
      </Typography>
    );
  }
    
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
        mt={6}
        mb={6}
      >
        <Box
          sx={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            borderRight: "2px solid #e0e0e0", // Vertical line
            paddingRight: 1,
          }}
        >
          {isLoading ? (
            <SkeletonCategory />
          ) : (
            categories &&
            categories.map((category, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  paddingY: 1,
                  paddingX: 2,
                  "&:hover": { backgroundColor: "#f5f5f5", color: "blue" },
                }}
              >
                <Typography
                component={Link}
                to={`#${category}`}
                smooth
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: 18,
                    textTransform: "capitalize",
                    textDecoration:"none",
                    color: selectedCategory === category ? "blue" : "black"
                  }}
                  onClick={()=>browseHandlerbyId(category)}
                >
                {category}
                </Typography>
               <Link to={`#${category}`}> <KeyboardArrowRight sx={{color:'black'}} onClick={()=>browseHandlerbyId(category)}/></Link>
              </Box>
            ))
          )}
          {error && (
            <p style={{ color: "red", fontSize: "24px", textAlign: "center" }}>
              An unexpected error occurred: {error.error || "Unknown Error"}
            </p>
          )}
        </Box>

        <Box
          sx={{
            width: 892,
            height: 344,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Splide
            options={{
              type: "loop",
              autoplay: true,
              interval: 3000,
              pauseOnHover: true,
              pauseOnFocus: true,
              speed: 1000, // Transition speed
              perPage: 1, // Number of slides visible
              arrows: false,
              pagination: true,
            }}
            style={{ height: 344 }}
          >
            <SplideSlide>
              <img
                src={HomePageImg}
                alt="Slide 1"
                style={{ width: 892, height: 344, objectFit: "contain" }}
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src={HomePageImg2}
                alt="Slide 2"
                style={{ width: 892, height: 344, objectFit: "contain" }}
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src={HomePageImg3}
                alt="Slide 3"
                style={{ width: 892, height: 344, objectFit: "contain" }}
              />
            </SplideSlide>
          </Splide>
          <Typography
             onClick={()=>navigate('/home')}
            // component="a"
            // href="/home"
            sx={{
              color: "white",
              textAlign: "center",
              fontFamily: "Poppins",
              fontWeight: "bold",
              position: "absolute",
              top: 280,
              left: 180,
            }}
          >
            Shop Now{" "}
            <span style={{ position: "absolute", marginTop: 1, marginLeft: 1 }}>
              <ArrowForward />
            </span>
          </Typography>
        </Box>
      </Box>
      <Box>
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
                Today's
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
                  Flash Sales
                </Typography>
                <Box sx={{ width: 900, display: "flex", gap: 2 }}>
                  {/* Day Section */}
                  <Box
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      Days
                    </Typography>
                    <Typography
                      variant="h4"
                      color="text.primary"
                      sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
                    >
                      {timeLeft.days} :
                    </Typography>
                  </Box>

                  {/* Hours Section */}
                  <Box
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      Hours
                    </Typography>
                    <Typography
                      variant="h4"
                      color="text.primary"
                      sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
                    >
                      {timeLeft.hours} :
                    </Typography>
                  </Box>

                  {/* Minutes Section */}
                  <Box
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      Minutes
                    </Typography>
                    <Typography
                      variant="h4"
                      color="text.primary"
                      sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
                    >
                      {timeLeft.minutes} :
                    </Typography>
                  </Box>

                  {/* Seconds Section */}
                  <Box
                    sx={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: "16px", fontWeight: "bold" }}
                    >
                      Seconds
                    </Typography>
                    <Typography
                      variant="h4"
                      color="text.primary"
                      sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
                    >
                      {timeLeft.seconds}
                    </Typography>
                  </Box>
                </Box>
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

  {categoryLoading? <LoadingSkeleton/>:(<>
        <Box mt={12}>
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
            Categories
          </Typography>
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
            Browse By Categories
          </Typography>
          <Box  sx={{display:"flex",gap:4,justifyContent:"center",
           flexDirection: "row",
           flexWrap: "wrap", }}  id="browse-by-category" >
           { categories &&
            categories.map((category, index) => (
            <Button
             id={`${category}`} 
            key={index}
              sx={{
                width: 175,
                height: 145,
                border: "1px solid #1E1E1E",
                textTransform:"capitalize",
                fontFamily:"Poppins",
                fontSize:16,
                color:"black",
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "center", 
                gap: 1, 
                backgroundColor: selectedCategory === category ? "#DB4444" : "none",
              }}
              onClick={() => handleCategoryClick(category)} 
            >
              {(category ==='electronics')&&  <ElectricalServices sx={{ fontSize: 40 }} />}
             {(category ==='jewelery')&& <Diamond sx={{ fontSize: 40 }}/>}
             {(category ===`women's clothing`)&& <Girl sx={{ fontSize: 40 }}/>}
             {(category ===`men's clothing`)&&<Boy sx={{ fontSize: 40 }}/>}
              {category}
            </Button>
            ))}
            </Box>
        </Box>
        <Typography
            variant="body1"
            color="initial"
            sx={{
              fontFamily: "Poppins",
              fontSize: "18px",
              borderLeft: "10px solid #00FF66",
              padding: 1,
              marginLeft: "8px",
              marginTop:'15px',
              textTransform:'capitalize',
              color:"#00FF66",
              fontWeight:'bold'
            }}
          >
            {selectedCategory}
          </Typography>
          </>)}
        <ImageCards cardData={categoryData} />
        {(errorProduct ||getCategoryError ) && (
          <h1 style={{ color: "red", fontSize: "24px", textAlign: "center" }}>
            An unexpected error occurred:{" "}
            {errorProduct.error || "Unknown Error"}
          </h1>
        )}
      </Box>
      <Explore/>
    </>
  );
}
export default Home