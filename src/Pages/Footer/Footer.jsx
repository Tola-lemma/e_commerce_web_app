import { Copyright, Facebook, Instagram, LinkedIn, Send, X } from '@mui/icons-material'
import { Box,  IconButton, InputBase, Typography } from '@mui/material'
import React from 'react'
import qrcode from '../../Assets/Qr Code.png'
import playstore from '../../Assets/GooglePlay.png'
import appstore from '../../Assets/AppStore.png'
import { useNavigate } from 'react-router-dom'
export const Footer = () => {
  const navigate =useNavigate()
  return (
      <Box  sx={{backgroundColor:"black",color:"white",height:440,alignContent:"center"}}>
      <Box sx={{display:"flex",justifyContent:"space-evenly", marginTop:"3rem"}}>
           <Box>
           <Typography
            variant="h6"
            noWrap
            onClick={()=>navigate("/home")}
            sx={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  color: 'white',
                  textDecoration: 'none',
                  cursor:"pointer"
                }}>
              Exclusive
            </Typography>
           <Typography
           p={"3px 0"}
            variant="h7"
            noWrap
            component="a"
            href="#"
            sx={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  color: 'white',
                  textDecoration: 'none',
                }}>
              Subcribe
            </Typography>
           <Typography
           p={"3px 0"}
            variant="h7"
            noWrap
            component="a"
            href="#"
            sx={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  color: 'white',
                  textDecoration: 'none',
                }}>
              Get 10% off your first order
            </Typography>
            <p style={{border:"1px solid white",borderRadius:"10px"}}>
            <InputBase
            placeholder="Enter Your Email"
            sx={{
              fontSize: "14px",
              fontFamily: "Poppins",
              padding: "4px 8px",
              color: "white",
             width:"140px"
            }}
          />
          <IconButton
            sx={{
              color: "white",
              borderRadius: 0,
            }}
          >
            <Send/>
          </IconButton>
          </p>
           </Box>
           <Box>
           <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  color: 'white',
                  textDecoration: 'none',
                }}>
              Support
            </Typography>
           <Typography
           p={"3px 0"}
            variant="h7"
            noWrap
            component="a"
            href="#"
            sx={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  color: 'white',
                  textDecoration: 'none',
                }}>
              111 Bijoy sarani, Dhaka,<br/>
              DH 1515, Bangladesh.
            </Typography>
           <Typography
           p={"3px 0"}
            variant="h7"
            noWrap
            component="a"
            href="mailto:exclusive@gmail.com"
            sx={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  color: 'white',
                  textDecoration: 'none',
                }}>
              exclusive@gmail.com
            </Typography>
           <Typography
           p={"3px 0"}
            variant="h7"
            noWrap
            component="a"
            href="tel:+88015-88888-9999"
            sx={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  color: 'white',
                  textDecoration: 'none',
                }}>
              +88015-88888-9999
            </Typography>
           </Box>
           <Box>
           <Typography
            variant="h6"
            noWrap
           onClick={()=>navigate("/account")}
            // component="a"
            // href="/account"
            sx={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  color: 'white',
                  textDecoration: 'none',
                  cursor:"pointer"
                }}>
              Account
            </Typography>
           <Typography
           p={"3px 0"}
            variant="h7"
            noWrap
            onClick={()=>navigate('/account')}
            // component="a"
            // href="/account"
            sx={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  color: 'white',
                  textDecoration: 'none',
                  cursor:"pointer"
                }}>
              My Account
            </Typography>
           <Typography
           p={"3px 0"}
            variant="h7"
            noWrap
            component="a"
            href="/"
            sx={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  color: 'white',
                  textDecoration: 'none',
                }}>
              Login / Register
            </Typography>
           <Typography
           p={"3px 0"}
            variant="h7"
            noWrap
            onClick={()=>navigate('/cart')}
            // component="a"
            // href="/cart"
            sx={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  color: 'white',
                  textDecoration: 'none',
                  cursor:"pointer"
                }}>
              Cart
            </Typography>
           <Typography
           p={"3px 0"}
            variant="h7"
            noWrap
            onClick={()=>navigate('/wishlist')}
            // component="a"
            // href="/wishlist"
            sx={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  color: 'white',
                  textDecoration: 'none',
                  cursor:"pointer"
                }}>
              WishList
            </Typography>
           <Typography
           p={"3px 0"}
            variant="h7"
            noWrap
            onClick={()=>navigate('/checkout')}
            // component="a"
            // href="/checkout"
            sx={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  color: 'white',
                  textDecoration: 'none',
                  cursor:"pointer"
                }}>
              Shop
            </Typography>
           </Box>
           <Box>
           <Typography
            variant="h6"
            noWrap
            onClick={()=>navigate('/home')}
            // component="a"
            // href="/home"
            sx={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  color: 'white',
                  textDecoration: 'none',
                  cursor:"pointer"
                }}>
              Quick Link
            </Typography>
           <Typography
           p={"3px 0"}
            variant="h7"
            noWrap
            component="a"
            href="#"
            sx={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  color: 'white',
                  textDecoration: 'none',
                }}>
              Privacy Policy
            </Typography>
           <Typography
           p={"3px 0"}
            variant="h7"
            noWrap
            component="a"
            href="#"
            sx={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  color: 'white',
                  textDecoration: 'none',
                }}>
              Terms Of Use
            </Typography>
           <Typography
           p={"3px 0"}
            variant="h7"
            noWrap
            component="a"
            href="#"
            sx={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  color: 'white',
                  textDecoration: 'none',
                }}>
              FAQ
            </Typography>
           <Typography
           p={"3px 0"}
            variant="h7"
            noWrap
            onClick={()=>navigate('/contact')}
            // component="a"
            // href="/contact"
            sx={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  color: 'white',
                  textDecoration: 'none',
                  cursor:"pointer"
                }}>
              Contact
            </Typography>
           </Box>
           <Box>
           <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  color: 'white',
                  textDecoration: 'none',
                }}>
              Download App
            </Typography>
           <Typography
           p={"1px 0"}
            variant="h7"
            noWrap
            component="a"
            href="#"
            sx={{
                  display: 'flex',
                  fontFamily: 'Poppins',
                  fontWeight: 200,
                  color: 'white',
                  textDecoration: 'none',
                }}>
              Save $3 with App New User Only
            </Typography>
            <span style={{display:"flex"}}>
                <img src={qrcode} alt='qr code'/>
                <span style={{display:"flex",flexDirection:"column", marginLeft:4}}>
                <img src={playstore} alt='qr code'/>
                <img src={appstore} alt='qr code'/>
                </span>
            </span>
            <p><Facebook/><X/> <Instagram/> <LinkedIn/></p>
           </Box>
      </Box>
      <hr style={{opacity:"50%",marginTop:"6rem"}}/>
           <Typography variant="body2" sx={{opacity:"60%",textAlign:"center"}}>
           <Copyright fontSize='8px'/> Copyright Tola {new Date().getFullYear()}. All right reserved
           </Typography>
      </Box>
  )
}
