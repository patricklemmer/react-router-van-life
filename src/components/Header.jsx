// Imports
// React imports
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="w-full grid gap-4 py-2 sm:flex sm:max-w-4xl sm:mx-auto sm:h-24 sm:items-center">
      <Link
        to="/"
        className="text-lg uppercase font-extrabold tracking-widest xs:text-xl sm:text-2xl sm:mr-auto sm:px-6"
      >
        #Vanlife
      </Link>
      <nav className="flex justify-center items-center gap-4 font-bold opacity-80 xs:text-lg xs:gap-6 sm:px-6">
        <Link to="/host">Host</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  );
}

export default Header;
