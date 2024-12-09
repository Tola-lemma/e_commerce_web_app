import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useGetUserByIdQuery } from "../../Features/userApiSlice";
import { useEffect, useState } from "react";

const MyProfile = () => {
      const [profileData, setProfileData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        address: "",
        phone: "",
      });
    
      const token = localStorage.getItem("token"); // Retrieve token
      const userId = token ? JSON.parse(atob(token.split(".")[1])).sub : null; // Decode user ID from token
    
      const { data: apiProfile, isSuccess } = useGetUserByIdQuery(userId, {
        skip: !token, // Skip API call if no token
      });
    
      // Load profile data once when the component mounts
      useEffect(() => {
        if (token && isSuccess && apiProfile) {
          setProfileData({
            firstName: apiProfile?.name?.firstname || "N/A",
            lastName: apiProfile?.name?.lastname || "N/A",
            username: apiProfile?.username || "N/A",
            email: apiProfile?.email || "N/A",
            address: `${apiProfile?.address?.street}, ${apiProfile?.address?.city}, ${apiProfile?.address?.zipcode}` || "N/A",
            phone: apiProfile?.phone || "N/A",
          });
        }
        else if (!token) {
            // Update from localStorage if no token
            const localData = JSON.parse(localStorage.getItem("formData"));
            if (localData) {
              setProfileData({
                firstName: localData?.name?.split(" ")[0] || "N/A",
                lastName: localData?.name?.split(" ")[1] || "N/A",
                username: localStorage.getItem('username') || "N/A",
                email: localData?.email || "N/A",
                address: localData?.address || "N/A",
                phone: localData?.phone || "N/A",
              });
            }
          }
      }, [token, isSuccess, apiProfile]);
    
      return (
        <Box sx={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
          <Typography variant="h4" gutterBottom>
            My Profile
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell variant="head" sx={{ fontWeight: "bold" }}>First Name</TableCell>
                  <TableCell>{profileData.firstName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" sx={{ fontWeight: "bold" }}>Last Name</TableCell>
                  <TableCell>{profileData.lastName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" sx={{ fontWeight: "bold" }}>Username</TableCell>
                  <TableCell>{profileData.username}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" sx={{ fontWeight: "bold" }}>Email</TableCell>
                  <TableCell>{profileData.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" sx={{ fontWeight: "bold" }}>Address</TableCell>
                  <TableCell>{profileData.address}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" sx={{ fontWeight: "bold" }}>Phone</TableCell>
                  <TableCell>{profileData.phone}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      );
    };
    
    export default MyProfile;