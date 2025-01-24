import "./Hero.css";
import React from "react";
import user from "../../Images/user.svg";

const Hero = () => {
  return (
    <div className="hero">
      <h1>
        Hi, I'm <img className="img" src={user} alt="" height="40px" /> Sachin!{" "}
      </h1>
      <h1>
        <span>I'm a</span> Product Lead <span>at</span>
      </h1>
      <div className="text-btn">
        <h1>
          <span className="span">Apple Design.</span>
        </h1>

        <button className="button">
          <span className="dot">
          </span>
          Open to work
        </button>
      </div>
    </div>
  );
};

export default Hero;
