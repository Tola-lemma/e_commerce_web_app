import React from "react";
import { Box, Stack, Breadcrumbs, Link, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const CustomBreadcrumbs = ({ items }) => {
  const navigate = useNavigate();

  const handleNavigation = (event, href) => {
    event.preventDefault(); // Prevent the default link behavior
    if (href) {
      navigate(href); // Navigate to the specified route
    }
  };

  return (
    <Box>
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<NavigateNext fontSize="small" />}
          aria-label="breadcrumb"
        >
          {/* Static Home Breadcrumb */}
          <Link
            underline="hover"
            color="inherit"
            onClick={(e) => handleNavigation(e, "/home")}
            component="button"
          >
            Home
          </Link>

          {/* Dynamically Rendered Breadcrumbs */}
          {items?.map((item, index) =>
            item.href ? (
              <Link
                key={index}
                underline="hover"
                color="inherit"
                onClick={(e) => handleNavigation(e, item.href)}
                component="button"
              >
                {item.name}
              </Link>
            ) : (
              <Typography
                key={index}
                sx={{ color: "text.primary" }}
              >
                {item.name}
              </Typography>
            )
          )}
        </Breadcrumbs>
      </Stack>
    </Box>
  );
};

export default CustomBreadcrumbs;
