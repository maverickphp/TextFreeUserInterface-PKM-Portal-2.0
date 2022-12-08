import React from "react";
import "../../styles/HeroSection.css";
import ReactAudioPlayer from "react-audio-player";
// import { Button } from "./Button";
import mainBanner from "../UI/OtherImages/mainbanner.jpg";

function HeroSection() {
  return (
    <>
      <div className="contain" style={{ width: "100%" }}>
        <img src={mainBanner} alt="mainBanner" />
        <ReactAudioPlayer
          style={{ width: "30%", height: "10%", marginTop: "16%" }}
          className="btn"
          autoPlay
          controls
        />
      </div>
      {/* <div className="hero-container">
        <img src={mainBanner} alt="MainBanner" />
        <h2></h2>
      </div>
      <ReactAudioPlayer
        className="mt-4"
        // style={{
        //   marginRight: "auto",
        //   marginLeft: "20%",
        //   width: "30%",
        // }}
        autoPlay
        controls
      /> */}
    </>
  );
}

export default HeroSection;
