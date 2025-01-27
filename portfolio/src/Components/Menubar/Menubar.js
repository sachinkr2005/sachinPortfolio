import React from "react";
import close from "../../Images/close.png";
import "./Menubar.css";

const Menubar = ({ toggleMenu }) => {
  return (
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
  );
};

export default Menubar;
