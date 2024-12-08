import React from 'react'
import {Box, Typography} from '@mui/material'
import sideImage from '../../Assets/about/Side Image.png'
import CustomBreadcrumbs from '../ReUsableComponents/BreadCrumb';
const About = () => {
      const breadcrumbsItems = [
            { name: "About" }, 
        ];
  return (
   <Box sx={{display:"flex"}} mt={2} gap={5}>
      <Box sx={{display:"flex",flexDirection:"column",alignContent:"center",alignItems:"left"}} mt={8} ml={10}>
      <CustomBreadcrumbs items={breadcrumbsItems} />
        <Typography variant="body1" sx={{fontFamily:"Poppins",fontSize:48}}>Our Story</Typography>
      <Typography variant="body1" color="initial" sx={{fontFamily:"Poppins"}}>
      Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
      </Typography>
      <Typography variant="body1" color="initial" sx={{fontFamily:"Poppins"}} mt={2}>
      Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.
      </Typography>
      </Box>
      <Box>
     <img src={sideImage} alt='sideIMG for sign up pages' width={650} height={500}/>
      </Box>
   </Box>
  )
}

export default About