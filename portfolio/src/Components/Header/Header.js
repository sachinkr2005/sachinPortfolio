import React from "react";
import tri from "../../Images/tri.svg";
import "./Header.css";
import sort from "../../Images/sort.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img className="logo1" src={tri} alt="" />
        <h4>sk9140086@gmail.com</h4>
      </div>
      <div className="right">
        <img className="right-logo" src={sort} alt="" />
      </div>
    </div>
  );
};

export default Header;
