import React from "react";
import { handlePageView } from "../tools/analytics";
import PoultryContainer from "../containers/poultry-container";

export default class PoultryPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <main className="poultry-page">
        <PoultryContainer />
      </main>
    );
  }
}
