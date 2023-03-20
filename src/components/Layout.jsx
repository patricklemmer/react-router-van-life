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
      <header className="grow-0">
        <Header />
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <footer className="grow-0">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
