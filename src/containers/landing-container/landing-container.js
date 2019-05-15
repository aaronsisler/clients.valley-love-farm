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
    <Gallery images={landingGallery} />
  </div>
);

export default LandingContainer;
