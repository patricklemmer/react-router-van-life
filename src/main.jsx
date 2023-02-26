// Imports
// React imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Page imports
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';

// Stylesheet imports
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <header className="w-full grid gap-4 py-2 sm:flex sm:max-w-4xl sm:mx-auto sm:h-24 sm:items-center">
        <Link
          to="/"
          className="text-lg uppercase font-extrabold tracking-widest xs:text-xl sm:text-2xl sm:mr-auto sm:px-6"
        >
          #Vanlife
        </Link>
        <nav className="flex justify-center items-center gap-4 xs:text-lg xs:gap-6 sm:px-6">
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
