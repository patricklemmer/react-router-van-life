// Imports
// React imports
import React from 'react';
import { Outlet } from 'react-router-dom';

// Component imports
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="flex flex-col">
      <header>
        <Header />
      </header>
      <main className="grow border-4 border-blue-500">
        <Outlet />
      </main>
      <footer className="border-4 border-red-500">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
