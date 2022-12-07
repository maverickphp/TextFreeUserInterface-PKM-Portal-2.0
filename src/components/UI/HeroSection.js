import React from "react";
import "../../styles/HeroSection.css";
import { Button } from "./Button";
import mainBanner from "../UI/OtherImages/mainbanner.jpg";

function HeroSection() {
  return (
    <div className="hero-container">
      <img src={mainBanner} alt="MainBanner" />
      <h1>PKM E-PORTAL</h1>
      <p>FOR SEMI & ILLITERATE CITIZENS</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Service Details
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
