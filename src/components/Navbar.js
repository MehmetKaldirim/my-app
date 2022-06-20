import React from "react";
import reactLogo from "/Users/math/my-app/src/images/react-logo.png";

export function Navbar() {
  return (
    <nav className="nav">
      <header>
        <img src={reactLogo} alt="React Logo" className="nav--icon" />
        <h3 className="nav--logo-text">ReactFact</h3>
      </header>

      <h4 className="nav-title">React Course - Project 1</h4>
    </nav>
  );
}
