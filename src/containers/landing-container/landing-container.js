import React from "react";
import Landing from "../../components/landing";
import AboutUs from "../../components/about-us";
import Services from "../../components/services";
import LandingGallery from "../../components/landing-gallery";
import "./landing-container.scss";

const LandingContainer = () => (
  <div className="landing-container">
    <Landing />
    <AboutUs />
    <Services />
    <LandingGallery />
  </div>
);

export default LandingContainer;
