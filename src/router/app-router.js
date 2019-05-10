import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  ContactPage,
  LandingPage,
  NotFoundPage,
  PrivacyPolicyPage
} from "../pages";

const AppRouter = () => (
  <Switch>
    <Route path="/" component={LandingPage} exact={true} />
    <Route path="/contact" component={ContactPage} exact={true} />
    <Route path="/privacy" component={PrivacyPolicyPage} exact={true} />
    <Route path="/not_found" component={NotFoundPage} exact={true} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default AppRouter;
