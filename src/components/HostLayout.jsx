// Imports
// React imports
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function HostLayout() {
  const activeStyles = {
    color: '#161616',
    textDecoration: 'underline',
    fontWeight: 'bold',
    opacity: 1,
  };

  return (
    <>
      <nav className="mt-6 mb-4 grid gap-2 items-center justify-center text-sm opacity-80 xxs:flex xxs:gap-4 sm:gap-10 sm:max-w-xl sm:mx-auto">
        <NavLink
          to="."
          end
          className="py-1 px-2 rounded-md font-bold opacity-70 xs:py-2 xs:px-4"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className="py-1 px-2 rounded-md font-bold opacity-70 xs:py-2 xs:px-4"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          className="py-1 px-2 rounded-md font-bold opacity-70 xs:py-2 xs:px-4"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          className="py-1 px-2 rounded-md font-bold opacity-70 xs:py-2 xs:px-4"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
