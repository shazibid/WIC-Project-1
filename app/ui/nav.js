// component has event handlers (onClick)
// + interacts w DOM (openNav/closeNav, which must be defined in script.js)
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // open + close overlay
  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  const navStyle = {
    height: isOpen ? '100%' : '0%', // control overlay height/animation
  };

  return (
    <>
      {/* --- NAVBAR --- */}
      <div id="myNav" className="overlay" style={navStyle}> 
        
        <button 
          type="button"
          className="closebtn" 
          onClick={closeNav}
          aria-label="Close navigation menu"
        >
          &times;
        </button>
    
        {/* Overlay content */}
        <div className="overlay-content">
          {/* onClick={closeNav} so menu closes when user navigates */}
          <Link href="/" onClick={closeNav}>Home</Link>
          <Link href="/pets" onClick={closeNav}>Pets</Link>
          <Link href="/about" onClick={closeNav}>About</Link>
        </div>
      </div>
    
      {/* hamburger button */}
      <div className="nav-wrapper">
        <span 
          className="menu-button" 
          onClick={openNav}
        >
          &#9776;
        </span>
      </div>
    </>
  );
  }