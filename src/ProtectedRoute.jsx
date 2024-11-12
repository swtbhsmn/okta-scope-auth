import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { toRelativeUrl } from '@okta/okta-auth-js';
import { Outlet } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'
const ProtectedRoute = () => {
  const { oktaAuth, authState } = useOktaAuth();
  if (!authState?.isAuthenticated) {
    const originalUri = toRelativeUrl(window.location.href, window.location.origin);
    oktaAuth.setOriginalUri(originalUri);
    oktaAuth.signInWithRedirect();
    return (<Box sx={{ p: 10 }}><CircularProgress size={22} title='loading' /></Box>);
  }
  else {
    return (<Outlet />);
  }

}

export default ProtectedRoute;