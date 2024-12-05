import React, { useState } from 'react'
import {Box,Button,Grid,TextField, Typography} from '@mui/material'
import sideImage from '../../Assets/Side Image.png'
import GoogleIcon from '../../Assets/Icon-Google.png'
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    console.log('Form Data:', formData);
  };
  return (
   <Box sx={{display:"flex"}} mt={8} gap={5}>
      <Box>
     <img src={sideImage} alt='sideIMG for sign up pages' width={705} height={681}/>
      </Box>
      <Box sx={{display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center"}} mt={4}>
        <Typography variant="body1" sx={{fontFamily:"Poppins",fontSize:36}}>Create an Account</Typography>
        <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        margin: '0 auto',
        padding: 4,
        borderRadius: 2,
        backgroundColor: 'white',
      }}
    >
   <Typography  sx={{textAlign:"center",fontSize:16,marginBottom:6,opacity:"90%",fontFamily:"Poppins"}}>Enter your details below</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{
              "& fieldset": { 
                border: 'none',               
                borderBottom: '2px solid rgb(228 200 228)',
               },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email or Phone Number"
            name="emailOrPhone"
            value={formData.emailOrPhone}
            onChange={handleChange}
            required
            type="text"
            sx={{
              "& fieldset": { 
                border: 'none',               
                borderBottom: '2px solid rgb(228 200 228)',
               },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            sx={{
              "& fieldset": { 
                border: 'none',               
                borderBottom: '2px solid rgb(228 200 228)',
               },
            }}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          marginTop: 3,
          padding: '10px',
          backgroundColor: 'error.main',
          textTransform:"none",
          fontFamily:"Poppins",
          fontSize:16
        }}
      >
        Create Account
      </Button>

      <Button
        fullWidth
        variant="contained"
        sx={{
          marginTop: 3,
          padding: '10px',
          backgroundColor: 'white',
          textTransform:"none",
          fontFamily:"Poppins",
          fontSize:16,
          color:'black',
          boxShadow:"none",
          border:"1px solid black"
        }}
      >
      <img src={GoogleIcon} alt='google' width={20} height={20}/> <span> <span style={{color:"white"}}> -- </span></span>  Sign Up With Google
      </Button>
      <Typography variant="body2" color="initial" sx={{textAlign:"center",fontFamily:"Poppins",marginTop:4}}>
        Already have an Account?  <a href='/' style={{color:"black",fontWeight:"bold"}}>Log In  </a>
      </Typography>
    </Box>
      </Box>
   </Box>
  )
}

export default SignUp