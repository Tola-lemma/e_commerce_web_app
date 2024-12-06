
import { ErrorContext } from './Pages/ToastErrorPage/ErrorContext'; // Adjust the path accordingly
import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { showError} = useContext(ErrorContext);
  const username = localStorage.getItem('username');
  const [hasWarned, setHasWarned] = useState(false);

  if (!username) {
    if (!hasWarned) {
      showError('You must sign in to access this page. If you do not have an account, please create one.');
      setHasWarned(true); 
    }
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
