// Imports
// React imports
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Sorry, the page you were looking for does not exist!</h1>
      <Link
        to="/"
        className="w-full bg-black text-white py-2 px-4 rounded-md font-bold text-center xxs:text-lg sm:text-xl"
      >
        Return to home
      </Link>
    </>
  );
}

export default NotFound;
