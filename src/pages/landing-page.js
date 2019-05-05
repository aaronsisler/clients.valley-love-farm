import React from "react";
import { handlePageView } from "../tools/analytics";
import LandingContainer from "../containers/landing-container";
import ServicesContainer from "../containers/services-container";
import TeamContainer from "../containers/team-container";

export default class LandingPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <main className="landing_page">
        <LandingContainer />
        <ServicesContainer />
        <TeamContainer />
      </main>
    );
  }
}
