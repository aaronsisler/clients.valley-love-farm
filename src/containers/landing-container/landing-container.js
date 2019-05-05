import React from "react";
import { Link } from "react-router-dom";
import "./landing-container.scss";

const LandingContainer = () => (
  <div className="landing_container">
    <div className="landing_container__splash">
      <div className="landing_container__splash-text">
        It&apos;s nice to meet you
      </div>
      <div className="landing_container__splash-link">
        <Link to="/pricing" className="link">
          Let&apos;s Get Started
        </Link>
      </div>
    </div>
  </div>
);

export default LandingContainer;
