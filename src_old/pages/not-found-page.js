import React from "react";
import { handlePageView } from "../tools/analytics";
import NotFoundContainer from "../containers/not-found-container";

export default class NotFoundPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <main className="not-found-page">
        <NotFoundContainer />
      </main>
    );
  }
}
