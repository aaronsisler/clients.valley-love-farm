import React from 'react';
import { extraServices } from '../content/lawn';

const TemplateSection = () => (
    <section id="extra_services">
        <div className="extra_services_header">
            <h3>Need more done?</h3>
            <p>
                We also provide additional services that provide a much needed break from the &quot;Spring Cleaning&quot; chores
                regarding the outside of your home. These range from cleaning out those overflowing gutters to pressure
                washing your driveway to give it like &quot;Like New&quot; look.
            </p>
        </div>
        <div className="extra_services_content">
            <div className="extra_services_row">
                {extraServices.map((item, index) => (
                    <div key={index} className="extra_service">
                        <div className="extra_service_header">
                            {item.title}
                        </div>
                        <div className="extra_service_pricing">
                            <div>{item.pricing.pricing1}</div>
                            <h2>{item.pricing.pricing2}</h2>
                            <h5>{item.pricing.pricing3}</h5>
                        </div>
                        <div className="extra_service_content">
                            <ul>
                                {item.content.map((contentItem, contentIndex) =>
                                    <li key={contentIndex}>{contentItem}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default TemplateSection;
