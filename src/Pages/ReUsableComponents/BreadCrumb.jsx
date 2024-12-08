import React from "react";
import { Box, Stack, Breadcrumbs, Link, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

const CustomBreadcrumbs = ({ items, onClick }) => {
  const handleClick = (event, href) => {
    // event.preventDefault();
    if (onClick) {
      onClick(href);
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
            href="/home"
            onClick={(e) => handleClick(e, "/home")}
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
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
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
