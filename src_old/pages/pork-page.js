import React from "react";
import { handlePageView } from "../tools/analytics";
import PorkContainer from "../containers/pork-container";

export default class PorkPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <main className="pork-page">
        <PorkContainer />
      </main>
    );
  }
}
