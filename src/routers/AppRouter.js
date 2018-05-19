import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

import { companyName } from '../config';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'
import ContactPage from '../components/ContactPage'
import __templateModalPage from '../components/__templateModalPage'
import FAQPage from '../components/FAQPage'
import PrivacyPolicyPage from '../components/PrivacyPolicyPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
        <ScrollToTop>
            <Navbar companyName={companyName} />
            <Switch>
                <Route path="/" component={LandingPage} exact={true} />
                <Route path="/templatemodal" component={__templateModalPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/faq" component={FAQPage} />
                <Route path="/privacy" component={PrivacyPolicyPage} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </ScrollToTop>
    </BrowserRouter>
);

export default AppRouter;
