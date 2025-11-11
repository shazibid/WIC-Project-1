// component has event handlers (onClick)
// + interacts w DOM (openNav/closeNav, which must be defined in script.js)
'use client'; 

import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      {/* --- NAVBAR --- */}
      <div id="myNav" className="overlay">
        <a 
          href="javascript:void(0)" 
          className="closebtn" 
          onClick={() => window.closeNav()} // call global func
        >
          &times;
        </a>
    
        {/* Overlay content */}
        <div className="overlay-content">
          {/* internal nav */}
          <Link href="/">Home</Link>
          <Link href="/pets">Pets</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    
      {/* open overlay nav */}
      <div className="nav-wrapper">
        <span 
          className="menu-button" 
          onClick={() => window.openNav()}
        >
          &#9776;
        </span>
      </div>
    </>
  );
}