import React from "react";
import "./purpleSection.css";
import Button from "../common/buttons";

const PurpleSection = () => {
  return (
    <div className="purple-section image-section">
      <div className="max-width">
        <div className="image-section-child">
          <div className="image-section-top">
            <div className="image-section-heading purple-heading">
              security first. and second.
            </div>
            <div className="image-section-subheading">
              what’s yours remains only yours.
            </div>
            <div className="image-section-bottom">
              <div className="image-section-description purple-description">
                CRED ensures that all your personal data and transactions are
                encrypted, and secured so what’s yours remains only yours.
                there’s no room for mistakes because we didn’t leave any.
              </div>
              <div>
                <Button buttonText="Become a member" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurpleSection;
