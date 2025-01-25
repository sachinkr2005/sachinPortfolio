import React from "react";
import "./Card.css";
import ai from "../../Images/ai.png";

const Cards = () => {
  return (
    <>
      <div className="cards-upper">
        <div className="card-upper1">
          <h3>My Experience</h3>
          <div className="card-upper1-wrap" style={{ border: "none" }}>
            <h4>
              produced Lead at Apple <span>2025-On Site-Full Time</span>
            </h4>
            <h4>
              Product Designear at Apple<span>2023 Hybrid-Part Time</span>
            </h4>
            <h4>
              Ui/Ux Designer at Apple <span>2022 Remote-Full Time</span>
            </h4>
          </div>
        </div>
        <div className="card-upper2">
          <h3>My Music Playlist</h3>
          <img src={ai} alt="" />
        </div>
        <div className="card-upper-3">
          <h3>what I'm reading</h3>
          <div className="card-upper-3-text" style={{ border: "none" }}>
            <h4>Dieter Ram the </h4>
            <h4>Completes work</h4>
            <h4>
              <span>klaus klamp</span>
            </h4>
          </div>

          {/* <img src={ram} alt="" /> */}
        </div>
      </div>

      <div className="cards-lower">
        <div className="card-lower1">
          <h3> Map</h3>
          <div className="child-container" style={{ border: "none" }}>
            <h4 style={{ letterSpacing: "11px" }}>MONTREAL</h4>
            <h4 style={{ letterSpacing: "7px" }}>
              <span>CANADA</span>
            </h4>
            <h4>
              <span>45</span>
            </h4>
          </div>
        </div>
        <div className="card-lower2">
          <h3 className="work-btn">How I Work</h3>
          <div className="card-lower-txt" style={{ border: "none" }}>
            <h4>01 Discovery Cell</h4>
            <h4>
              <span>
                Robert Hooke discovered cells in 1665 using a microscope. He was
                one of the first scientists to study living things under a
                microscope
              </span>
            </h4>
 
          </div>
          <div class="progress-bar">
      <div style={{backgroundColor:"black",color:"white"}}>Step 01</div>
      
      <div >Step 03</div>
      <div >Step 04</div>
      <div >Step 05</div>
    </div>

          
        </div>
      </div>
    </>
  );
};

export default Cards;
