import React, { useState } from "react";
import tri from "../../Images/tri.svg";
import close from "../../Images/close.png";
import sort from "../../Images/sort.svg";
import Menubar from "../Menubar/Menubar";
import "./Header.css";

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
      {isMenuOpen && <Menubar toggleMenu={toggleMenu} />}
    </div>
  );
};

export default Header;
