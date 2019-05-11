import React from "react";
import { handlePageView } from "../tools/analytics";
import PrivacyPolicyContainer from "../containers/privacy-policy-container";

export default class PrivacyPolicyPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <div className="privacy-policy-page">
        <PrivacyPolicyContainer />
      </div>
    );
  }
}
