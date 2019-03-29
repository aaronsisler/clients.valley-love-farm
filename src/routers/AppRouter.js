import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

import { companyName } from '../config';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'
import ContactPage from '../components/ContactPage'
import FarmPage from '../components/FarmPage'
import PoultryPage from '../components/PoultryPage'
import PorkPage from '../components/PorkPage'
import LawnPage from '../components/LawnPage'
import PrivacyPolicyPage from '../components/PrivacyPolicyPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
        <ScrollToTop>
            <Navbar companyName={companyName} />
            <Switch>
                <Route path="/" component={LandingPage} exact={true} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/farm" component={FarmPage} />
                <Route path="/poultry" component={PoultryPage} />
                <Route path="/pork" component={PorkPage} />
                <Route path="/lawn" component={LawnPage} />
                <Route path="/privacy" component={PrivacyPolicyPage} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </ScrollToTop>
    </BrowserRouter>
);

export default AppRouter;