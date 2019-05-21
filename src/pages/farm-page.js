import React from "react";
import { handlePageView } from "../tools/analytics";
import FarmContainer from "../containers/farm-container";

export default class ContactPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <main className="farm-page">
        <FarmContainer />
      </main>
    );
  }
}
