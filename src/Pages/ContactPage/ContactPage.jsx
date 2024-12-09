import React, { useContext, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { ErrorContext } from "../ToastErrorPage/ErrorContext";
import CustomBreadcrumbs from "../ReUsableComponents/BreadCrumb";

const ContactPage = () => {
      const {showError,showSuccess} = useContext(ErrorContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Validate form data (optional)
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      showError("Please fill in all the fields.");
      return;
    }

    // Logic for sending the message can go here (API call, etc.)
    showSuccess("Message sent successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };
  const breadcrumbsItems = [
      { name: "Contact" }, 
    
  ];
  return (
    <Box sx={{ padding: "20px" }}>
      <CustomBreadcrumbs items={breadcrumbsItems} />
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={2}>
        {/* Left Box: Contact Details */}
        <Grid item xs={12} md={6}  >
          <Paper elevation={1} sx={{ padding: "20px", height: "100%" }}>
            <Typography variant="h6" gutterBottom>
              <CallIcon sx={{ marginRight: "10px", color: "#DB4444" }} />
              Call Us
            </Typography>
            <Typography variant="body1" gutterBottom>
            We are available 24/7, 7 days a week.
            </Typography>
            <Typography variant="body1" gutterBottom>
            Phone:<Typography component="a" href="tel:+8801611112222" sx={{textDecoration:"none"}} variant="body1" color="initial">+8801611112222</Typography> 
            </Typography>

            <Typography variant="h6" gutterBottom mt={4}>
              <EmailIcon sx={{ marginRight: "10px", color: "#DB4444" }} />
              Write to Us
            </Typography>
            <Typography variant="body1">
            Fill out our form and we will contact you within 24 hours.
              <br />
              Emails: <Typography component="a" href="mailto:customer@exclusive.com" sx={{textDecoration:"none"}} variant="body1" color="initial">customer@exclusive.com</Typography>
              <br></br>
              Emails:
              <Typography component="a" href="mailto:support@exclusive.com" sx={{textDecoration:"none"}} variant="body1" color="initial">support@exclusive.com</Typography>
            </Typography>
          </Paper>
        </Grid>

        {/* Right Box: Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={1} sx={{ padding: "20px" }}>
            <form>
              <TextField
                label="Your Name"
                name="name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{ marginBottom: "15px" ,marginRight:2}}
              />
              <TextField
                label="Your Email"
                name="email"
                variant="outlined"
                value={formData.email}
                required
                onChange={handleChange}
                sx={{ marginBottom: "15px" }}
              />
              <TextField
                label="Your Phone"
                name="phone"
                required
                variant="outlined"
                value={formData.phone}
                onChange={handleChange}
                sx={{ marginBottom: "15px" }}
              />
              <TextField
                label="Your Message"
                name="message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
                value={formData.message}
                onChange={handleChange}
                sx={{ marginBottom: "15px" }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#DB4444",
                  color: "white",
                  textTransform: "none",
                  float: "right",
                }}
                onClick={handleSubmit}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;
