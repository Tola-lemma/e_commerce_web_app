import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import CustomBreadcrumbs from '../ReUsableComponents/BreadCrumb';

const NotFoundPage = () => {
  const navigate = useNavigate(); 

  const handleGoHome = () => {
      navigate('/home'); 
  };
  const breadcrumbsItems = [
      { name: "404 Error" }
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        padding: 0,
        margin: 0,
        width:"100%"
      }}
    >
    <span style={{marginTop:"-200px",marginBottom:"70px",marginLeft:"-900px"}}><CustomBreadcrumbs items={breadcrumbsItems}/></span>
      <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#ff6347' }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px' }}>
        You visited a page that doesn't exist. You may go to the home page.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoHome}
        sx={{ padding: '10px 20px' ,backgroundColor:"#DB4444"}}
      >
       Back to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
