import React from "react";
import { Box, Typography, List, ListItem, Link } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Effective Date: <span style={{fontFamily:"Poppins",fontWeight:"bold"}}>Dec 09, 2024</span> 
      </Typography>

      <Typography variant="h6" gutterBottom>
        Table of Contents
      </Typography>
      <List>
        <ListItem>
          <Link href="#introduction" underline="hover">
            1. Introduction
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#data-collection" underline="hover">
            2. Data We Collect
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#data-usage" underline="hover">
            3. How We Use Your Data
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#data-sharing" underline="hover">
            4. Data Sharing and Disclosure
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#cookies" underline="hover">
            5. Cookies and Tracking Technologies
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#data-security" underline="hover">
            6. Data Security
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#user-rights" underline="hover">
            7. Your Rights
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#changes" underline="hover">
            8. Changes to This Policy
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#contact-us" underline="hover">
            9. Contact Us
          </Link>
        </ListItem>
      </List>

      <Typography id="introduction" variant="h6" gutterBottom>
        1. Introduction
      </Typography>
      <Typography gutterBottom>
        Welcome to E-Commerce Web App. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our e-commerce platform.
      </Typography>

      <Typography id="data-collection" variant="h6" gutterBottom>
        2. Data We Collect
      </Typography>
      <Typography gutterBottom>
        We may collect the following information:
        <ul>
          <li>Personal information: Name, email, phone number, address</li>
          <li>Order details: Purchase history, payment information</li>
          <li>Device and usage data: IP address, browser type, session data</li>
        </ul>
      </Typography>

      <Typography id="data-usage" variant="h6" gutterBottom>
        3. How We Use Your Data
      </Typography>
      <Typography gutterBottom>
        Your data is used to:
        <ul>
          <li>Process orders and payments</li>
          <li>Provide customer support</li>
          <li>Personalize your shopping experience</li>
          <li>Send updates about your orders and promotions</li>
        </ul>
      </Typography>

      <Typography id="data-sharing" variant="h6" gutterBottom>
        4. Data Sharing and Disclosure
      </Typography>
      <Typography gutterBottom>
        We do not sell your data. However, we may share it with:
        <ul>
          <li>Payment processors</li>
          <li>Shipping providers</li>
          <li>Service providers assisting in app functionality</li>
          <li>Legal authorities if required by law</li>
        </ul>
      </Typography>

      <Typography id="cookies" variant="h6" gutterBottom>
        5. Cookies and Tracking Technologies
      </Typography>
      <Typography gutterBottom>
        We use cookies to enhance your browsing experience. You can manage your cookie preferences in your browser settings.
      </Typography>

      <Typography id="data-security" variant="h6" gutterBottom>
        6. Data Security
      </Typography>
      <Typography gutterBottom>
        We implement robust security measures to protect your data. However, no system is 100% secure, and we cannot guarantee absolute protection.
      </Typography>

      <Typography id="user-rights" variant="h6" gutterBottom>
        7. Your Rights
      </Typography>
      <Typography gutterBottom>
        You have the right to:
        <ul>
          <li>Access your data</li>
          <li>Correct inaccurate information</li>
          <li>Request data deletion</li>
          <li>Opt out of marketing communications</li>
        </ul>
      </Typography>

      <Typography id="changes" variant="h6" gutterBottom>
        8. Changes to This Policy
      </Typography>
      <Typography gutterBottom>
        We may update this policy periodically. Changes will be posted on this page with the updated effective date.
      </Typography>

      <Typography id="contact-us" variant="h6" gutterBottom>
        9. Contact Us
      </Typography>
      <Typography gutterBottom>
        If you have any questions or concerns, contact us at:
        <ul>
          <li>Email: support@exclusive.com</li>
          <li>Phone: +8 (801) 611-112 222</li>
        </ul>
      </Typography>
    </Box>
  );
};

export default PrivacyPolicy;
