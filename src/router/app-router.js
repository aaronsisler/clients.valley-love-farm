import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  ContactPage,
  FAQPage,
  LandingPage,
  NotFoundPage,
  PortfolioPage,
  PricingPage,
  PrivacyPolicyPage,
  ProjectPage
} from "../pages";

const AppRouter = () => (
  <Switch>
    <Route path="/" component={LandingPage} exact={true} />
    <Route path="/contact" component={ContactPage} exact={true} />
    <Route path="/pricing" component={PricingPage} exact={true} />
    <Route path="/portfolio" component={PortfolioPage} exact={true} />
    <Route path="/project/:projectId" component={ProjectPage} exact={true} />
    <Route path="/privacy" component={PrivacyPolicyPage} exact={true} />
    <Route path="/faq" component={FAQPage} exact={true} />
    <Route path="/not_found" component={NotFoundPage} exact={true} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default AppRouter;
