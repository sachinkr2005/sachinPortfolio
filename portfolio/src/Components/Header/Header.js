import React, { useState } from "react";
import tri from "../../Images/tri.svg";
import "./Header.css";
import close from "../../Images/close.png";
import sort from "../../Images/sort.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="header-left">
        <img className="logo1" src={tri} alt="Logo" />
        <h4>sk9140086@gmail.com</h4>
      </div>
      <div className="right">
        {!isMenuOpen && (
          <img
            className="right-logo"
            onClick={toggleMenu}
            src={sort}
            alt="Hamburger Icon"
          />
        )}
      </div>
      {isMenuOpen && (
        <div className="menu-bar">
          <button onClick={toggleMenu} className="menu-toggle">
            <img src={close} alt="Close Icon" className="menu-icon" />
          </button>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
