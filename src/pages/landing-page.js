import React from "react";
import { handlePageView } from "../tools/analytics";
import LandingContainer from "../containers/landing-container";

export default class LandingPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <main className="landing-page">
        <LandingContainer />
      </main>
    );
  }
}
