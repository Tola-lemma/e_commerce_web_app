import React from 'react'
import { Box } from '@mui/material'
import { TopHeader } from '../Header/TopHeader'
import { MainHeader } from '../Header/MainHeader'

const Home = () => {
  return (
   <Box sx={{
      // margin: 0,
      // padding: 0,
      width: "100%",
    }}>
   <TopHeader/>
   <MainHeader/>
   </Box>
  )
}
export default Home