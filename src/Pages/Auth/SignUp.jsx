import React, { useContext, useState } from 'react'
import {Box,Button,FormControlLabel,Radio,RadioGroup,TextField, Typography} from '@mui/material'
import Grid from '@mui/material/Grid2';
import sideImage from '../../Assets/Side Image.png'
import GoogleIcon from '../../Assets/Icon-Google.png'
import { useNavigate } from 'react-router-dom';
import { useUserSignUpMutation } from '../../Features/userApiSlice';
import { ErrorContext } from '../ToastErrorPage/ErrorContext';
const SignUp = () => {
  const navigate = useNavigate()
  const [userSignUp] =useUserSignUpMutation()
  const { showSuccess,showError } = useContext(ErrorContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    method: 'email', // Default to email
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleMethodChange = (e) => {
    setFormData({
      ...formData,
      method: e.target.value,
      email: e.target.value === 'email' ? formData.email : '',
      phone: e.target.value === 'phone' ? formData.phone : '',
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const result = await userSignUp(formData)
    if(result?.data){
      localStorage.setItem('formData', JSON.stringify(formData));
      showSuccess('You are Successfully create an account now sign in to continue --> Redirecting to login page')
      navigate('/login');
    }
    else{
      showError('Error while creating an account please try again...')
    }
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
      <Grid container spacing={2} >
        <Grid item xs={12} size={12}>
          <TextField
            fullWidth
            label="UserName"
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
        <Grid item xs={12} size={12}>
              <RadioGroup row value={formData.method} onChange={handleMethodChange}>
                <FormControlLabel value="email" control={<Radio />} label="Email" />
                <FormControlLabel value="phone" control={<Radio />} label="Phone" />
              </RadioGroup>
              <TextField
                fullWidth
                label={formData.method === 'email' ? 'Email' : 'Phone Number'}
                name={formData.method}
                value={formData.method === 'email' ? formData.email : formData.phone}
                onChange={handleChange}
                required
                type={formData.method === 'email' ? 'email' : 'tel'}
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
        Already have an Account?  <span onClick={()=> navigate("/login")} style={{color:"black",textDecoration:"underline",cursor:"pointer",fontWeight:"bold"}}>Log In  </span>
      </Typography>
    </Box>
      </Box>
   </Box>
  )
}

export default SignUp