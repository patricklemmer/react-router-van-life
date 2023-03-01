// Imports
// React imports
import React from 'react';

function Footer() {
  const date = new Date();

  return (
    <footer className="w-full h-24 flex flex-shrink-0 mt-auto justify-center items-center gap-2 bg-neutral-800 text-slate-200 text-xs  xs:text-base">
      <p>&#169;</p>
      <p>{date.getFullYear()}</p>
      <p>#VANLIFE</p>
    </footer>
  );
}

export default Footer;
