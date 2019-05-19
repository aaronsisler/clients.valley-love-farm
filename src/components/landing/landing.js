import React from "react";
import LandingWidgets from "../landing-widgets";
import "./landing.scss";

const Landing = () => (
  <div className="landing">
    <div className="landing__splash" />
    <div className="landing__title">Valley Love Farm</div>
    <LandingWidgets />
  </div>
);

export default Landing;
