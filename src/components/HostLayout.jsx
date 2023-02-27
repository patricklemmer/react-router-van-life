// Imports
// React imports
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function HostLayout() {
  return (
    <>
      <nav className="mt-6 mb-4 grid gap-2 items-center justify-center text-sm opacity-80 xxs:flex xxs:gap-4 sm:gap-10 sm:pl-8 sm:max-w-2xl sm:mx-auto">
        <Link
          to="/host"
          className=" bg-orange-200 py-1 px-2 rounded-md xs:py-2 xs:px-4 hover:font-bold"
        >
          Dashboard
        </Link>
        <Link
          to="/host/income"
          className=" bg-orange-200 py-1 px-2 rounded-md xs:py-2 xs:px-4 hover:font-bold"
        >
          Income
        </Link>
        <Link
          to="/host/reviews"
          className=" bg-orange-200 py-1 px-2 rounded-md xs:py-2 xs:px-4 hover:font-bold"
        >
          Reviews
        </Link>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
