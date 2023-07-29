import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our Vision is to make all people <br /> the best place to live for
            them
          </span>
        </div>

        <div className="flexColStart f-right">
          <div className="flexCenter f-menu">
            <span>
              <a href="#projects">Projects</a>
            </span>
            <span>
              <a href="#values">Our Values</a>
            </span>
            <span>
              <a href="#clients">Our Clients</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
