import React from "react";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <nav className="section max__width">
      <div className="logo">
        <img src="/images/logo.png" alt="perfect ride logo" />
      </div>

      <ul className={`list transition-opacity duration-300 ease-in-out 
        ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } lg:opacity-100 lg:visible` }>
        <li className="list-item">
          <a className="list-link">Rider</a>
        </li>
        <li className="list-item">
          <a className="list-link">Driver</a>
        </li>
        <li className="list-item">
          <a className="list-link">Earn-to-ride</a>
        </li>
      </ul>

      <div className="flex gap-4 items-center">
        <div className="content-flex hidden">
          <img src="/images/web.png" alt="web" />
          <p className="text-white font-[400] leading-[100%]">Eng</p>
        </div>
        
      </div>
      <div className="flex items-center gap-10">
      <a className="cta">Whitelist</a>

      <div className="menu" onClick={handleClick}>
        {open ? (        
             <svg width="20" height="20" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="close">
             <path d="M7 1L1 7M1 1L7 7" stroke="white" stroke-width="0.9375" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>       
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.125 18.375H19.875M4.125 12.375H19.875M4.125 6.375H19.875" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        )}
      </div>
      </div>
    </nav>
  );
};



export default Header;
