import React from 'react';
import { handlePageView } from '../tools/analytics';

export default class TemplatePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        handlePageView();
    }

    render() {
        return (
            <div id="template_page">
                I am the template page
            </div>
        );
    }
}