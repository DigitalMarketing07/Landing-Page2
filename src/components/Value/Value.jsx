import React, { useState } from "react";
import { AiFillAndroid, AiOutlineSafety } from "react-icons/ai";
import { BiBulb } from "react-icons/bi";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { TbView360 } from "react-icons/tb";
import { GiStrong } from "react-icons/gi";
import { FcBusinessman } from "react-icons/fc";
import {} from "react-icons/gi";
import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
import { useScroll } from "framer-motion";

const Value = () => {
  return (
    <>
      <section className="v-wrapper" id="values">
        <div className="paddings innerWidth flexCenter v-container">
          {/* Left Side */}
          <div className="v-left">
            <div className="image-container">
              <img src="./value.jpg" alt="" />
            </div>
          </div>

          {/* Right side */}
          <div className="flexColStart v-right">
            <span className="orangeText">Our Value</span>
            <span className="primaryText">Value We Give to You</span>
            <span className="secondaryText">
              We always ready to help by providing the best services for you.
              <br />
              We believe a good place to live can your life better
            </span>

            <div className="value-container">
              <div className="flexRowStart value-provider">
                <div className="flexCenter value-icon">
                  <FcBusinessman />
                </div>
                <div className="flexColStart value-right">
                  <span className="valuePrimary">
                    {" "}
                    Transparency meets strength
                  </span>
                  <span className="secondaryText">
                    Experience the perfect balance of safety and aesthetics as
                    our glass railings seamlessly blend transparency with robust
                    durability, adding a touch of sophistication to your spaces.
                  </span>
                </div>
              </div>
              <div className="flexRowStart value-provider">
                <div className="flexCenter value-icon">
                  <TbView360 />
                </div>
                <div className="flexColStart value-right">
                  <span className="valuePrimary">
                    {" "}
                    Clear views, sturdy support
                  </span>
                  <span className="secondaryText">
                    Unveil breathtaking vistas and enjoy unobstructed panoramas
                    without compromising on safety, thanks to our reliable and
                    visually appealing glass railing solutions.
                  </span>
                </div>
              </div>
              <div className="flexRowStart value-provider">
                <div className="flexCenter value-icon">
                  <HiOutlineHomeModern />
                </div>
                <div className="flexColStart value-right">
                  <span className="valuePrimary"> The modern touch</span>
                  <span className="secondaryText">
                    Embrace contemporary design with our glass railings that
                    effortlessly complement any architectural style, offering a
                    timeless appeal that never goes out of fashion.
                  </span>
                </div>
              </div>
            </div>
            <div className="flexStart">
              <button className="button value-btn">
                <a href="#contact">Contact Us</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Value;
