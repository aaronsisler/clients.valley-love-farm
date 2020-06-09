import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  ContactPage,
  FarmPage,
  LandingPage,
  LawnPage,
  NotFoundPage,
  PorkPage,
  PoultryPage,
  PrivacyPolicyPage
} from "../pages";

const AppRouter = () => (
  <Switch>
    <Route path="/" component={LandingPage} exact={true} />
    <Route path="/contact" component={ContactPage} exact={true} />
    <Route path="/farm" component={FarmPage} exact={true} />
    <Route path="/lawn" component={LawnPage} exact={true} />
    <Route path="/pork" component={PorkPage} exact={true} />
    <Route path="/poultry" component={PoultryPage} exact={true} />
    <Route path="/privacy" component={PrivacyPolicyPage} exact={true} />
    <Route path="/not_found" component={NotFoundPage} exact={true} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default AppRouter;
