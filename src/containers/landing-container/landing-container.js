import React from "react";
import Landing from "../../components/landing";
import AboutUs from "../../components/about-us";
import Services from "../../components/services";
import Gallery from "../../components/gallery";
import landingGallery from "../../content/landing-gallery";
import "./landing-container.scss";

const LandingContainer = () => (
  <div className="landing-container">
    <Landing />
    <AboutUs />
    <Services />
    <div className="landing-container__gallery">
      <Gallery images={landingGallery} />
    </div>
  </div>
);

export default LandingContainer;
