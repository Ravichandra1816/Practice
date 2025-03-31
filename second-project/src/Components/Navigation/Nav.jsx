import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="left">
        <img src="/logo.png" />
      </div>
      <div className="right">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
