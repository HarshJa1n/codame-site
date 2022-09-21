import React from "react";
import "./firstSection.css";
import designteam from "./designteam.png";
const FirstSection = () => {
  return (
    <div className="first-section-wrapper">
      <div className="flex make-center first-section">
        <div className="first-heading">
          Presenting{" "}
          <span>Indian Institute of Information Technology, Bhopal's</span>{" "}
          designing club:
          <div className="first-subheading">Designers' Den</div>
        </div>
        <div className="image-holder flex">
          <img src={designteam} className="picture" alt="team" height={600} />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
