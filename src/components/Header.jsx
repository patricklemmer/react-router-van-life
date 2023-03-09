// Imports
// React imports
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// Icon imports
import { BiUserCircle } from 'react-icons/bi';

function Header() {
  return (
    <header className="w-full grid gap-4 py-8 sm:flex sm:max-w-4xl sm:mx-auto sm:py-14 sm:px-8 sm:items-center">
      <Link
        to="/"
        className="text-lg uppercase font-extrabold tracking-widest xs:text-xl sm:text-2xl sm:mr-auto sm:px-6"
      >
        #Vanlife
      </Link>
      <nav className="flex justify-center items-center gap-4 font-bold text-neutral-500 xs:text-lg xs:gap-6 sm:px-6">
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? 'active-link' : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active-link' : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? 'active-link' : null)}
        >
          Vans
        </NavLink>
        <Link to="login">
          <BiUserCircle />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
