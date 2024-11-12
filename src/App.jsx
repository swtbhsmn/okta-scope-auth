import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css'
import AppRoutes from './AppRoutes';

const App = () => {

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <AppRoutes/>
    </Router>
  )
};

export default App;
