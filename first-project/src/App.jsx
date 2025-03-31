import { useState } from "react";
import "./index.css";
// import logo from "../public/logo.png";

function App() {
  return (
    <>
      <nav>
        <img src="/logo.png" alt="logo" />
        <ul>
          <li href="#">Home</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
      <div className="main">
        <div className="left">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            SERVER THE BEST AND WE ARE HEARE TO OUR SHOES. YOUR FEET THE
            DESERVE, WE ARE HERE TO HELP WITH OUR.
          </p>
          <div className="btn">
            <button className="shop">Shop Now</button>
            <button className="cat">Category</button>
          </div>
        </div>

        <div className="right">
          <img src="/image.webp" alt="image" />
        </div>
      </div>
    </>
  );
}

export default App;
