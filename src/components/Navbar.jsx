import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-full max-h-fit p-4 bg-skin-bg-nav">
      <ul className="mx-auto grid grid-cols-2 grid-rows-2 gap-4 xs:flex xs:gap-8 md:max-w-screen-md">
        <li className="col-span-2 xs:mr-auto">
          <Link to="/" className="text-black font-bold uppercase">
            #Vanlife
          </Link>
        </li>
        <li className="">
          <Link to="/about">About</Link>
        </li>
        <li className="">
          <Link to="/vans">Vans</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
