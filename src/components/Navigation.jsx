import React, { useState } from "react";
import "./components.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navigation-container">
      <div className="logo">
        <h2>LOGO</h2>
      </div>
      <div className={`nav-items ${toggleMenu && "small-menu-active"}`}>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/services"}>
          <li>Services</li>
        </Link>
        <Link to={"/about"}>
          <li>About</li>
        </Link>
      </div>
      <div className="small-menu" onClick={() => setToggleMenu(!toggleMenu)}>
        <AiOutlineMenu />
      </div>
    </div>
  );
};

export default Navigation;
