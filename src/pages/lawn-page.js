import React from "react";
import { handlePageView } from "../tools/analytics";
import LawnContainer from "../containers/lawn-container";

export default class LawnPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <main className="lawn-page">
        <LawnContainer />
      </main>
    );
  }
}
