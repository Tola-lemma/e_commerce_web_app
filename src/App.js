import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { colors, NAME } from "./Constants/constant";
import Layout from "./Pages/Layout";
// import ProtectedRoute from "./ProtectedRoute";
const SignUp = lazy(()=>import('./Pages/Auth/SignUp'));
const Home = lazy(()=>import('./Pages/Home/Home'));
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
        path: "/signup",
        exact: true,
        element: <SignUp />,
      },
      {
        path: "/",
        exact: true,
        element: <Home />,
      },
      {
        // path:'/',
        // exact:true,
        // element:<Login/>

      },
      
    ];
    
    export const App = ()=>{
      return (
        <>
          <Suspense fallback={<LoadingPage />}>
            <Layout>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/signup" element={<SignUp />} />
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
          </Suspense>
        </>
      );
    }