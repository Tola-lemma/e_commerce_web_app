import { KeyboardArrowDown } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

export const TopHeader = () => {
  return (
    <Box
      sx={{
        height: 48,
        padding: 0,
        margin: 0,
        textAlign: "center",
        alignContent: "center",
        backgroundColor: "black",
        color: "white",
        fontFamily: "Poppins",
        fontSize: 14,
        width: "100%",
      //   position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000, // Makes sure it stays above other content
      }}
    >
      <Box sx={{position:"relative"}} >
      Summer Sale For All Swim Suits And Free Express Delivery -
      <span
        style={{
          color: "red",
          fontWeight: "bold",
          animation: "blink 1s infinite",
        }}
      >
        OFF 50%!
      </span>
      <style>
        {`
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
      <span> </span>
      <span>
        {" "}
        <a
          href="/"
          style={{ color: "white", fontFamily: "Poppins", fontWeight: "bold" }}
        >
          Shop Now
        </a>
      </span>
      </Box>
      <Box sx={{position:"absolute", top:15, left:1200}}>
        <span style={{fontFamily: "Poppins",fontSize: 14}}>English</span> <KeyboardArrowDown sx={{color:"white",position:"absolute"}} />
      </Box>
    </Box>
  );
};
