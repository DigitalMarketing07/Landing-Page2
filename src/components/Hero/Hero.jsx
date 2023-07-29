import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* Left Side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Less is More, <br />
              Enjoy a Seamless <br />
              Experience
            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find a variety of railings that suit you very easily
            </span>
            <span className="secondaryText">
              Forgot all difficulties in finding the railings for you
            </span>
          </div>

          <div className="flexCenter search-bar">
            {/* <input type="text" /> */}
            <button className="button">
              <a href="#contact">Contact Us</a>
            </button>
            {/* <HiLocationMarker color="var(--blue)" size={25} /> */}
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp
                  start={300000}
                  end={500000}
                  duration={3}
                  className="hero-number"
                />
                <span>+</span>
              </span>
              <span className="secondaryText">Running Feet</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp
                  start={1950}
                  end={2000}
                  duration={4}
                  className="hero-number"
                />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={45} className="hero-number" />
                <span>+</span>
              </span>
              <span className="secondaryText">Cities</span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="image-container"
            transition={{
              duration: 2,
              type: "spring",
            }}
          >
            <img src="./hero-image_11zon.jpg" alt="Building with glassess" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
