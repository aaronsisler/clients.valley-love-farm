import React from "react";
import landingWidgets from "../../content/landing-widgets";
import LandingWidget from "../landing-widget/landing-widget";
import "./landing-widgets.scss";

const LandingWidgets = () => (
  <div className="landing-widgets">
    {landingWidgets.map((landingWidget, index) => (
      <LandingWidget key={index} {...landingWidget} />
    ))}
  </div>
);

export default LandingWidgets;
