import React from 'react';
import { handlePageView } from '../tools/analytics';

import WidgetsSection from './WidgetsSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import GallerySection from './GallerySection';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        handlePageView();
    }

    render() {
        return (
            <div id="landing_page">
                <header>
                    <div className="intro_text">Valley Love Farm</div>
                </header>
                <WidgetsSection />
                <AboutSection />
                <ServicesSection />
                <GallerySection />
            </div>
        );
    }
}
