import React from 'react'
import { Box, Typography } from '@mui/material'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import HomePageImg from '../../Assets/home/Frame 560.png'
import HomePageImg2 from '../../Assets/home/shopnow.png'
import HomePageImg3 from '../../Assets/home/wirelessheadphone.png'
import { useGetAllProductQuery, useGetProductCategoryQuery } from '../../Features/productApiSlice';
import { ArrowForward, KeyboardArrowRight } from '@mui/icons-material';
import ImageCards from '../ReUsableComponents/ReusableCard.jsx'
import SkeletonCard from '../ReUsableComponents/SkeletonCard.jsx';
import SkeletonCategory from '../ReUsableComponents/ReUsableCategorySkeleton.jsx';
const Home = () => {
  const { data: categories, error, isLoading }  = useGetProductCategoryQuery();
  const {data:response,isLoading:isLoadingProduct, error:errorProduct } = useGetAllProductQuery()
  const cardData =
    response?.data.map((item) => ({
      imageSrc: item.image, 
      description:item.description,
      title: item.title, 
      category: item.category,
      price: item.price,
      rate: item.rate,
      ratingCount: item.ratingCount 
    })) || [];
  return (
    <>
   <Box sx={{
      width: "100%",
      display:"flex",
      justifyContent:"space-between",
    }} mt={6} mb={6}>
   <Box sx={{
     width: '25%',
     display: 'flex',
     flexDirection: 'column',
     borderRight: '2px solid #e0e0e0', // Vertical line
     paddingRight: 1,
   }}>
        {isLoading ? (
          <SkeletonCategory/>
        ) : (
          categories &&
          categories.map((category, index) => (
            <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              paddingY: 1,
              paddingX: 2,
              '&:hover': { backgroundColor: '#f5f5f5', color: 'blue' },
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontSize: 18,
                textTransform: 'capitalize',
              }}
            >
              {category}
            </Typography>
            <KeyboardArrowRight />
          </Box>
          ))
        )}
        {error&& <p style={{color:"red",fontSize:"24px",textAlign:"center"}}>An unexpected error occurred: {error.error || 'Unknown Error'}</p>}
      </Box>

      <Box sx={{ width: 892, height: 344, overflow: 'hidden',position:"relative"}}>
        <Splide
          options={{
            type: 'loop',
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
              style={{ width: 892, height: 344, objectFit: 'contain' }}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src={HomePageImg3}
              alt="Slide 3"
              style={{ width: 892, height: 344, objectFit: 'contain' }}
            />
          </SplideSlide>
        </Splide>
        <Typography component="a" href='/home' sx={{color: "white",textAlign:"center", fontFamily: "Poppins", fontWeight: "bold",
        position:"absolute",
        top:280,
        left:180
        }}>
                 Shop Now <span style={{position:"absolute",marginTop:1,marginLeft:1}}><ArrowForward/></span> 
          </Typography>
      </Box>
   
   </Box>
   <ImageCards cardData={cardData}/>
   {isLoadingProduct&&<SkeletonCard />}
   {errorProduct&&<h1 style={{color:"red",fontSize:"24px",textAlign:"center"}}>An unexpected error occurred: {errorProduct.error || 'Unknown Error'}</h1>}
   {/* {response&&response.data.map((item,index)=>(
    <p key={index}>
         <img src={item.image} alt="mkkmkm"  />
    </p>
   ))} */}
   </>
  )
}
export default Home