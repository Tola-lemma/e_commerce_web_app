import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { colors, NAME } from "./Constants/constant";
import Layout from "./Pages/Layout";
import { ErrorProvider } from "./Pages/ToastErrorPage/ErrorContext";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundPage from "./Pages/404/404";
const SignUp = lazy(()=>import('./Pages/Auth/SignUp'));
const Home = lazy(()=>import('./Pages/Home/Home'));
const LogIn = lazy(()=>import('./Pages/Auth/LogIn'))
const About = lazy(()=>import('./Pages/About/About'))
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
                  color: colors.background.tertiary
                }}
              >
                {NAME}
              </Typography>
              <Typography
                fontFamily="Campton"
                variant="p"
                sx={{ mt: 1 ,color: colors.background.tertiary}}
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
      
    ];
    
    export const App = ()=>{
      return (
        <>
          <Suspense fallback={<LoadingPage />}>
          <ErrorProvider>
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
            </ErrorProvider>
          </Suspense>
        </>
      );
    }