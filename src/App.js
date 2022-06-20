import React from "react";

import { Navbar } from "/Users/math/my-app/src/components/Navbar";
import { Main } from "/Users/math/my-app/src/components/Main";
import "./style.css";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}
