import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img
          src="./logo.png"
          alt="logo of Imperio Railing Systems"
          width={100}
        />
        <div className="flexCenter h-menu">
          <button className="button">
            <a href="https://goo.gl/maps/WS9LBcQF6RsXW9mHA" target="_blank">
              Locate Us
            </a>
          </button>
        </div>

        {/* <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div> */}
      </div>
    </section>
  );
};

export default Header;
