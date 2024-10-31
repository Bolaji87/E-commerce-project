import React from "react";
import { Link } from "react-router-dom";

import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <HeroDisplayText />
      <HeroDisplayImage />
    </div>
  );
}

function HeroDisplayText() {
  return (
    <div className="hero-display-text">
      <p>
        Welcome to Horizon Unisex Hub, welcome to <br />
        our wall of modest fashion where style meets sophistication.
      </p>

      <h1>horizon unisex hub</h1>
      <button>
        <Link to="/products">shop now</Link>
      </button>
    </div>
  );
}
function HeroDisplayImage() {
  return (
    <div className="hero-image">
      <img src="./images/fash-display-img2.jpg" alt="brand-picture" />
    </div>
  );
}
export default Hero;
