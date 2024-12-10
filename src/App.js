import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { colors, NAME } from "./Constants/constant";
import Layout from "./Pages/Layout";
import { ErrorProvider } from "./Pages/ToastErrorPage/ErrorContext";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundPage from "./Pages/404/404";
import { WishlistProvider } from "./Pages/WishList/WishListContext";
import { CartProvider } from "./Pages/Cart/CartContext";
import ContactPage from "./Pages/ContactPage/ContactPage";
import MyOrders from "./Pages/UserSetting/MyOrder";
import ManageAccount from "./Pages/UserSetting/MyAccount";
import PrivacyPolicy from "./Pages/Policy and Terms of use/privacyPloicy";
const CheckoutPage = lazy(()=>import('./Pages/CheckOut/CheckOutPage'));
const CartPage = lazy(() => import("./Pages/Cart/CartPage"));
const WishlistPage = lazy(() => import("./Pages/WishList/WishListPage"));
const SignUp = lazy(() => import("./Pages/Auth/SignUp"));
const Home = lazy(() => import("./Pages/Home/Home"));
const LogIn = lazy(() => import("./Pages/Auth/LogIn"));
const About = lazy(() => import("./Pages/About/About"));
const ProductDetails = lazy(()=>import('./Pages/Product/ProductDetails'))
const containerStyle = {
      position: "fixed",
      zIndex: 10000,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    };
    
    export const LoadingPage = () => {
      return (
        <Box style={containerStyle}>
          <Box
            sx={{
              display: "flex",
              fontFamily: "Campton",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <CircularProgress />
    
            <Box sx={{ ml: 3 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "Campton",
                  letterSpacing: "1px",
                  color: colors.background.black
                }}
              >
                {NAME}
              </Typography>
              <Typography
                fontFamily="Campton"
                variant="p"
                sx={{ mt: 1 ,color: colors.background.black}}
              >
                Hold on, We are preparing your content...
              </Typography>
            </Box>
          </Box>
        </Box>
      );
    };

    export const route = [
      {
        path: "/",
        exact: true,
        element: <SignUp />,
      },
      {
        path: "/home",
        exact: true,
        element: <Home />,
      },
      {
        path:'/login',
        exact:true,
        element:<LogIn/>

      },
      {
        path:'/product-details',
        exact:true,
        element:<ProductDetails/>

      },
      {
        path:'/about',
        exact:true,
        element:<About/>

      },
      {
        path:'/wishlist',
        exact:true,
        element:<WishlistPage/>

      },
      {
        path:'/checkout',
        exact:true,
        element:<CheckoutPage/>

      },
      {
        path:'/cart',
        exact:true,
        element:<CartPage/>

      },
      {
        path:'/contact',
        exact:true,
        element:<ContactPage/>

      },
      {
        path:'/my-order',
        exact:true,
        element:<MyOrders/>

      },
      {
        path:'/account',
        exact:true,
        element:<ManageAccount/>

      },
      {
        path:'/privacy policy',
        exact:true,
        element:<PrivacyPolicy/>

      },
      
    ];
    
    export const App = ()=>{
      return (
        <>
          <Suspense fallback={<LoadingPage />}>
          <ErrorProvider>
          <CartProvider>
          <WishlistProvider>
            <Layout>
              <Routes>
              <Route exact path="*" element={<NotFoundPage/>} />
                <Route exact path="/home" element={
                  <ProtectedRoute>
                  <Home />
                  </ProtectedRoute>
                  } 
                  />
                <Route exact path="/" element={<SignUp />} />
                <Route exact path="/login" element={<LogIn />} />
                <Route exact path="/product-details" element={<ProductDetails />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/wishlist" element={<WishlistPage />} />
                <Route exact path="/cart" element={<CartPage />} />
                <Route exact path="/checkout" element={<CheckoutPage />} />
                <Route exact path="/contact" element={<ContactPage />} />
                <Route exact path="/my-order" element={<MyOrders />} />
                <Route exact path="/account" element={<ManageAccount />} />
                <Route exact path="/privacy policy" element={<PrivacyPolicy />} />
                {/* <Route
                path="/app"
                element={
                   <ProtectedRoute>
                    <App />
                  </ProtectedRoute>
                }
              /> */}
              </Routes>
            </Layout>
            </WishlistProvider>
            </CartProvider>
            </ErrorProvider>
          </Suspense>
        </>
      );
    }