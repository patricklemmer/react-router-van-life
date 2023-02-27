// Imports
// React imports
import React from 'react';
import { Outlet } from 'react-router-dom';

// Component imports
import Header from './Header';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
