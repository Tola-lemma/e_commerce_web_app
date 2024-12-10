import React, { useState } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqItems = [
    {
      question: "What is E-commerce Web App?",
      answer:
        "E-commerce Web App is an e-commerce platform where you can browse, shop, and order a wide variety of products from multiple categories, all from the comfort of your home.",
    },
    {
      question: "How do I create an account?",
      answer:
        "To create an account, click on the 'Sign Up' button at the top of the page, fill in the required details, and submit.",
    },
    {
      question: "How do I place an order?",
      answer:
        "Browse through our product categories, add items to your cart, and proceed to checkout. Follow the steps to confirm your order and payment.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept various payment methods including bank transfer, direct cash, and other secure payment gateways. Check our Payments section for more details.",
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes, you can track your order by logging into your account, navigating to 'My Orders', and selecting the order you wish to track.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for most items. Items must be unused and in their original packaging. Visit our Return Policy page for full details.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach out to our customer support via email at support@exclusive.com or call us at +8 (801) 611-112 222. We're available 24/7 to assist you.",
    },
    {
      question: "Are my payment details secure?",
      answer:
        "Absolutely. We use state-of-the-art encryption and secure payment gateways to ensure your payment details are safe with us.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we offer international shipping to most countries. Shipping costs and delivery times vary based on your location.",
    },
  ];

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions (FAQs)
      </Typography>
      <Typography variant="body1" gutterBottom>
        Find answers to common questions about our platform, orders, payments, and more.
      </Typography>

      {faqItems.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary expandIcon={<ExpandMore />} id={`panel${index}-header`}>
            <Typography variant="h6">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
