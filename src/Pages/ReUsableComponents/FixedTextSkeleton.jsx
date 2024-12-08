// LoadingSkeleton.js
import React from 'react';
import { Box , Skeleton } from '@mui/material';
import SkeletonCard from './SkeletonCard';

const LoadingSkeleton = () => {
  return (
    <Box mt={18}>
      {/* Flash Sales Heading */}
      <Skeleton variant="text" width={200} height={40} sx={{ marginLeft: '6px' }} />
      
      {/* Countdown Timer Skeleton */}
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
          <Skeleton variant="text" width={50} height={30} />
          <Skeleton variant="text" width={50} height={30} />
        </Box>
        <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
          <Skeleton variant="text" width={50} height={30} />
          <Skeleton variant="text" width={50} height={30} />
        </Box>
        <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
          <Skeleton variant="text" width={50} height={30} />
          <Skeleton variant="text" width={50} height={30} />
        </Box>
        <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
          <Skeleton variant="text" width={50} height={30} />
          <Skeleton variant="text" width={50} height={30} />
        </Box>
        
        {/* Pagination Skeleton */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Skeleton variant="rectangular" width={40} height={40} sx={{ marginRight: 2 }} />
          <Skeleton variant="rectangular" width={40} height={40} />
        </Box>
      </Box>
     <SkeletonCard/>
      {/* View All Button Skeleton */}
      <Box textAlign="center" sx={{ marginTop: '20px' }}>
        <Skeleton variant="rectangular" width={150} height={40} />
      </Box>
    </Box>
  );
};

export default LoadingSkeleton;
