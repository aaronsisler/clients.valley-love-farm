import React from "react";
import { handlePageView } from "../tools/analytics";
import LandingContainer from "../containers/landing-container";
import AboutUsContainer from "../containers/about-us-container";
import ServicesContainer from "../containers/services-container";
import LandingGalleryContainer from "../containers/landing-gallery-container";

export default class LandingPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <main className="landing_page">
        <LandingContainer />
        <AboutUsContainer />
        <ServicesContainer />
        <LandingGalleryContainer />
      </main>
    );
  }
}
