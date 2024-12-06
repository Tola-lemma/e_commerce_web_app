import React from 'react';
import { Box } from '@mui/material';
import { TopHeader } from '../Pages/Header/TopHeader';
import { MainHeader } from '../Pages/Header/MainHeader';
import { Footer } from '../Pages/Footer/Footer';
import { ErrorMessage } from './ToastErrorPage/ErrorMessage';

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      {/* Fixed Header */}
      <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <TopHeader />
        <MainHeader />
      </Box>
     <ErrorMessage/>
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, mt: '96px', p: 2 }}>
        {children}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Layout;
