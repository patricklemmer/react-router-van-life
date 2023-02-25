import React from 'react';

function Footer() {
  const date = new Date();

  return (
    <footer className="flex-none w-full max-h-fit bg-skin-bg-footer flex justify-center items-center gap-2">
      <p>Ⓒ</p>
      <p>{date.getFullYear()}</p>
      <p>#VANLIFE</p>
    </footer>
  );
}

export default Footer;
