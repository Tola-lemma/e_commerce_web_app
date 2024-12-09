import React, { useContext, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { ErrorContext } from '../ToastErrorPage/ErrorContext';
import { useUserLogInMutation } from '../../Features/userApiSlice';
import sideImage from '../../Assets/Side Image.png';
import GoogleIcon from '../../Assets/Icon-Google.png';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const formDataFrmSignUp = JSON.parse(localStorage.getItem('formData'));
  const [userLogIn] = useUserLogInMutation();
  const { showSuccess, showError } = useContext(ErrorContext);
   const navigate =useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;

    // 1. Validate using signup data
    if (
      formDataFrmSignUp && 
      (username === formDataFrmSignUp.emailOrPhone || username === formDataFrmSignUp.name) &&
      password === formDataFrmSignUp.password
    ){
      localStorage.setItem('username', username);
      showSuccess('Successfully logged in .... Redirecting to home page');
      setTimeout(() => {
           navigate("/home");
        }, 5000);
    } else {
      try {
        // 2. Validate using API
        const result = await userLogIn({ username, password });
        if (result?.data) {
          localStorage.setItem('username', username);
          localStorage.setItem('token',result?.data.token)
          showSuccess('Successfully logged in .... Redirecting to home page');
          setTimeout(() => {
               navigate("/home");
            }, 5000);
        } else {
          showError(result?.error?.data || 'Invalid credentials');
        }
      } catch (error) {
        showError(error?.message || 'Internal Server Error');
      }
    }
  };

  return (
    <Box sx={{ display: 'flex' }} mt={8} gap={5}>
      <Box>
        <img src={sideImage} alt="sideIMG for sign up pages" width={705} height={681} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        mt={4}
      >
        <Typography variant="body1" sx={{ fontFamily: 'Poppins', fontSize: 36 }}>
          Log in to Exclusive
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: 400,
            padding: 4,
            backgroundColor: 'white',
            borderRadius: 2,
          }}
        >
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: 16,
              mb: 6,
              fontFamily: 'Poppins',
            }}
          >
            Enter your details below
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} size={12}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                type="text"
                sx={{
                  '& fieldset': {
                    border: 'none',
                    borderBottom: '2px solid rgb(228 200 228)',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} size={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                type="password"
                sx={{
                  '& fieldset': {
                    border: 'none',
                    borderBottom: '2px solid rgb(228 200 228)',
                  },
                }}
              />
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                marginTop: 3,
                padding: '10px',
                backgroundColor: 'error.main',
                textTransform: 'none',
                fontFamily: 'Poppins',
                fontSize: 16,
                width: '143px',
              }}
            >
              Log In
            </Button>
            <Typography component="a" href="/" sx={{color:"error.main", fontWeight:"bold",fontFamily:"Poppins",fontSize:16,marginTop:4,textDecoration:"none"}}>
            Forgot Password?
          </Typography>
          </Box>
          <Button
            fullWidth
            variant="contained"
            sx={{
              marginTop: 3,
              padding: '10px',
              backgroundColor: 'white',
              textTransform: 'none',
              fontFamily: 'Poppins',
              fontSize: 16,
              color: 'black',
              border: '1px solid black',
            }}
          >
            <img src={GoogleIcon} alt="google" width={20} height={20} />{" "}
            <span>
              {" "}
              <span style={{ color: "white" }}> -- </span>
            </span>{" "}
            Sign In With Google
          </Button>
          <Typography variant="body2" color="initial" sx={{textAlign:"center",fontFamily:"Poppins",marginTop:4}}>
        Don't have an Account?  <a href='/' style={{color:"black",fontWeight:"bold"}}>Create one  </a>
      </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LogIn;
