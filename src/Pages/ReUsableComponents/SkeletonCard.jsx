import React from "react";
import { Box, Card, CardContent, Skeleton } from "@mui/material";

const SkeletonCard = ({ count = 4, width = 290, height = 370 }) => {
  const skeletonArray = Array.from({ length: count });

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        padding: "40px",
        marginTop: "16px",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      {skeletonArray.map((_, index) => (
        <Card
          key={index}
          sx={{
            width,
            height,
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
              left: width - 40,
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
            }}
          >
            <Skeleton variant="circular" width={30} height={30} />
            <Skeleton variant="circular" width={30} height={30} />
          </Box>
          {/* Skeleton for Image Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: height * 0.5,
              width: "100%",
              backgroundColor: "#F2F2F2",
              borderRadius: "4px",
              marginTop: "10px",
            }}
          >
            <Skeleton variant="rectangular" width="100%" height="100%" />
          </Box>
          {/* Skeleton for Card Content */}
          <CardContent
            sx={{
              width: "100%",
              textAlign: "left",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: "-1.3rem",
              flexGrow: 1,
            }}
          >
            <Skeleton variant="rectangular" height={40} width="100%" sx={{ borderRadius: "4px" }} />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="50%" />
            <Skeleton variant="text" width="60%" />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default SkeletonCard;
