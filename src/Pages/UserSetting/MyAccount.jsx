import React, { useContext, useState } from "react";
import { Box, Button, Typography, TextField, Grid, MenuList, MenuItem } from "@mui/material";
import CustomBreadcrumbs from "../ReUsableComponents/BreadCrumb";
import {  useUpdateUserByIdMutation } from "../../Features/userApiSlice";
import { ErrorContext } from "../ToastErrorPage/ErrorContext";
import MyProfile from "./Myprofile";

const ManageAccount = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const renderRightBoxContent = () => {
    switch (activeSection) {
      case "profile":
        return <EditProfile />;
      case "MyInformation":
        return <MyProfile/>;
      // case "paymentOptions":
      //   return <Typography>Payment Options Component</Typography>;
      default:
        return <Typography>Select an option from the menu</Typography>;
    }
  };
  const breadcrumbsItems = [
      { name: "My Account"}
]
const token = localStorage.getItem("token"); // Retrieve token
      const apiUsername = token ? JSON.parse(atob(token?.split(".")[1])).user : null;
  return (
    <Box mt={4} ml={3}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }} mb={4}>
        <CustomBreadcrumbs items={breadcrumbsItems} />
        <Typography variant="body1" color="initial">
          Welcome !{" "}
          <span
            style={{
              color: "#DB4444",
              fontFamily: "Poppins",
              marginRight: "50px",
            }}
          >
            {token? apiUsername:localStorage.getItem("username")}
          </span>
        </Typography>
      </Box>
      <Box sx={{ display: "flex", height: "100vh", padding: "20px" }}>
        {/* Left Box */}
        <Box
          sx={{
            width: "20%",
            padding: "10px",
            backgroundColor: "#f5f5f5",
            borderRight: "1px solid #ddd",
          }}
        >
          <MenuList>
            {[
              { name: "Manage My Account", id: "profile" },
              { name: "My Profile", id: "MyInformation" },
            ].map((item) => (
              <MenuItem
                key={item.id}
                sx={{
                  padding: "10px 20px",
                  color: activeSection === item.id ? "#DB4444" : "inherit",
                  borderRadius: "5px",
                  marginBottom: "5px",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                }}
                onClick={() => handleSectionClick(item.id)}
              >
                {item.name}
              </MenuItem>
            ))}
          </MenuList>
        </Box>

        {/* Right Box */}
        <Box sx={{ width: "70%", padding: "20px", marginLeft: 8 }}>
          {renderRightBoxContent()}
        </Box>
      </Box>
    </Box>
  );
};

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    username:"",
    email: "",
    phone: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
const {showError,showSuccess} = useContext(ErrorContext)
  const token = localStorage.getItem("token"); 
  const [updateUserById, { isLoading}] = useUpdateUserByIdMutation();
  const userId = token ? JSON.parse(atob(token?.split(".")[1])).sub : null; // Decode user ID from token
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSaveChanges = async (e) => {
      e.preventDefault();
      const requiredFields = [
        { field: "firstName", label: "First Name" },
        { field: "lastName", label: "Last Name" },
        { field: "username", label: "Username" },
        { field: "email", label: "Email" },
        { field: "phone", label: "Phone Number" },
      ];
    
      const emptyFields = requiredFields.filter(
        ({ field }) => !profileData[field].trim()
      );
    
      if (emptyFields.length > 0) {
        const errorMessage = `Please fill out the following fields: ${emptyFields
          .map(({ label }) => label)
          .join(", ")}`;
        showError(errorMessage);
        return; 
      }
    
      if (profileData.newPassword && profileData.newPassword !== profileData.confirmPassword) {
        showError("New Password and Confirm Password do not match.");
        return; 
      }
      if (token) {
            // Submit data via API
            try {
              const userData = {
                name: {
                  firstname: profileData.firstName,
                  lastname: profileData.lastName,
                },
                username: profileData.username,
                email: profileData.email,
                address: {
                  city: profileData.address,
                  street: profileData.address,
                  number: profileData.address,
                  zipcode: profileData.address,
                }, 
                phone: profileData.phone,
                password:profileData.newPassword
              };
              const result = await updateUserById({ id: userId, ...userData });
              if (result?.error) {
                showError("Error updating profile: " + result?.error.data.message);
              } else {
                showSuccess("Profile updated successfully!");
              }
            } catch (error) {
             showError("Error updating profile "+ error.message);
            }
      } else {
            const userData = {
                  name: {
                    firstname: profileData.firstName,
                    lastname: profileData.lastName,
                  },
                  username: profileData.username,
                  email: profileData.email,
                  address: profileData.address, // Assume correct format for address
                  phone: profileData.phone,
                  password:profileData.newPassword
                };
        localStorage.setItem("formData", JSON.stringify(userData));
        localStorage.setItem('username',profileData.username)
        showSuccess("Profile updated successfully!.");
      }
  };

  const handleCancel = () => {
    setProfileData({
      firstName: "",
      lastName: "",
      username:"",
      email: "",
      phone: "",
      address: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Edit Your Profile
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            label="First Name"
            fullWidth
            required
            name="firstName"
            value={profileData.firstName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Last Name"
            fullWidth
            required
            name="lastName"
            value={profileData.lastName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="User Name"
            fullWidth
            name="username"
            value={profileData.username}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Phone Number"
            required
            fullWidth
            name="phone"
            value={profileData.phone}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            fullWidth
            required
            name="email"
            value={profileData.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            fullWidth
            name="address"
            value={profileData.address}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Password</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Current Password"
            fullWidth
            name="currentPassword"
            type="password"
            value={profileData.currentPassword}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="New Password"
            fullWidth
            name="newPassword"
            type="password"
            value={profileData.newPassword}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Confirm Password"
            fullWidth
            name="confirmPassword"
            type="password"
            value={profileData.confirmPassword}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Box sx={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <Button variant="contained" sx={{backgroundColor:"#DB4444"}} onClick={handleSaveChanges}>
        {isLoading ? "Saving..." : "Save Changes"}
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default ManageAccount;
