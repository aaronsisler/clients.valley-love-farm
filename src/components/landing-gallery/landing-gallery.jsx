import React from "react";
import Image from "../../atoms/image";
import landingGallery from "../../content/landing-gallery";

import "./landing-gallery.scss";

const LandingGallery = () => (
  <div className="landing-gallery">
    {landingGallery.map(image => (
      <Image key={image.key} className="landing-gallery__image" {...image} />
    ))}
  </div>
);

export default LandingGallery;
