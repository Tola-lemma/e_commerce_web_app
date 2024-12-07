import React from "react";
import { Box, Skeleton } from "@mui/material";

const SkeletonCategory = ({ count = 4 }) => {
  // Create an array for the number of skeletons to render
  const skeletonArray = Array.from({ length: count });

  return (
    <div>
      {skeletonArray.map((_, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            cursor: "pointer",
            paddingY: 1,
            paddingX: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Skeleton
              variant="text"
              width={150}
              height={25}
              sx={{ borderRadius: "4px" }}
            />
          </Box>
          <Skeleton variant="circular" width={24} height={24} />
        </Box>
      ))}
    </div>
  );
};

export default SkeletonCategory;
