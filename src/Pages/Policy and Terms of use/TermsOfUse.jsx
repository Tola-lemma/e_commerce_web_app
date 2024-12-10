import React from "react";
import { Box, Typography, List, ListItem, Link } from "@mui/material";

const TermsOfUse = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Terms of Use
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
          <Link href="#eligibility" underline="hover">
            2. Eligibility
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#account-responsibilities" underline="hover">
            3. Account Responsibilities
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#prohibited-conduct" underline="hover">
            4. Prohibited Conduct
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#intellectual-property" underline="hover">
            5. Intellectual Property
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#orders-and-payments" underline="hover">
            6. Orders and Payments
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#limitation-of-liability" underline="hover">
            7. Limitation of Liability
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#modifications" underline="hover">
            8. Modifications to Terms
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#termination" underline="hover">
            9. Termination
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#governing-law" underline="hover">
            10. Governing Law
          </Link>
        </ListItem>
        <ListItem>
          <Link href="#contact-us" underline="hover">
            11. Contact Us
          </Link>
        </ListItem>
      </List>

      <Typography id="introduction" variant="h6" gutterBottom>
        1. Introduction
      </Typography>
      <Typography gutterBottom>
        Welcome to E-Commerce Web App! By accessing or using our e-commerce platform, you agree to comply with these Terms of Use. If you do not agree, please refrain from using our services.
      </Typography>

      <Typography id="eligibility" variant="h6" gutterBottom>
        2. Eligibility
      </Typography>
      <Typography gutterBottom>
        To use our services, you must:
        <ul>
          <li>Be at least 18 years of age or have parental/guardian consent</li>
          <li>Provide accurate and complete information</li>
        </ul>
      </Typography>

      <Typography id="account-responsibilities" variant="h6" gutterBottom>
        3. Account Responsibilities
      </Typography>
      <Typography gutterBottom>
        Users are responsible for:
        <ul>
          <li>Maintaining the confidentiality of account credentials</li>
          <li>All activities conducted under their account</li>
        </ul>
      </Typography>

      <Typography id="prohibited-conduct" variant="h6" gutterBottom>
        4. Prohibited Conduct
      </Typography>
      <Typography gutterBottom>
        You agree not to:
        <ul>
          <li>Engage in fraudulent or unlawful activities</li>
          <li>Distribute harmful or malicious software</li>
          <li>Violate any laws or regulations</li>
        </ul>
      </Typography>

      <Typography id="intellectual-property" variant="h6" gutterBottom>
        5. Intellectual Property
      </Typography>
      <Typography gutterBottom>
        All content, including text, graphics, logos, and software, is the property of E-Commerce Web App or its licensors. Unauthorized use is prohibited.
      </Typography>

      <Typography id="orders-and-payments" variant="h6" gutterBottom>
        6. Orders and Payments
      </Typography>
      <Typography gutterBottom>
        By placing an order:
        <ul>
          <li>You agree to provide accurate payment information</li>
          <li>We reserve the right to refuse or cancel orders at any time</li>
        </ul>
      </Typography>

      <Typography id="limitation-of-liability" variant="h6" gutterBottom>
        7. Limitation of Liability
      </Typography>
      <Typography gutterBottom>
        E-Commerce Web App is not liable for any indirect, incidental, or consequential damages arising from your use of our platform.
      </Typography>

      <Typography id="modifications" variant="h6" gutterBottom>
        8. Modifications to Terms
      </Typography>
      <Typography gutterBottom>
        We reserve the right to update these Terms of Use at any time. Changes will be effective upon posting.
      </Typography>

      <Typography id="termination" variant="h6" gutterBottom>
        9. Termination
      </Typography>
      <Typography gutterBottom>
        We may terminate or suspend your account if you violate these terms or engage in prohibited conduct.
      </Typography>

      <Typography id="governing-law" variant="h6" gutterBottom>
        10. Governing Law
      </Typography>
      <Typography gutterBottom>
        These Terms of Use are governed by the laws of Ethiopia/Addis Ababa, without regard to its conflict of law provisions.
      </Typography>

      <Typography id="contact-us" variant="h6" gutterBottom>
        11. Contact Us
      </Typography>
      <Typography gutterBottom>
        For questions about these terms, contact us at:
        <ul>
        <li>Email: support@exclusive.com</li>
        <li>Phone: +8 (801) 611-112 222</li>
        </ul>
      </Typography>
    </Box>
  );
};

export default TermsOfUse;
