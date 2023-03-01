// Imports
// React imports
import React from 'react';
import { Outlet } from 'react-router-dom';

// Component imports
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
