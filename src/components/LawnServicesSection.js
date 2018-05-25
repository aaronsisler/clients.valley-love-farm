import React from 'react';
import { lawnServices } from '../content/lawn';

const LawnServicesSection = () => (
    <section id="lawn_services">
        <div className="lawn_services_header">
            <h3>We put the Care in Lawn Care!</h3>
            <p>
                We see lawn care as weekly maintenance, not as a bi-weekly chore. Your lawn will always look in tip top shape,
                even during the rainy season. With our weekly schedule, your lawn will not only look great every week, but
                you will be getting the most &quot;Bang for your buck&quot; compared to other competitors.
            </p>
        </div>
        <div className="lawn_services_content">
            <div className="lawn_services_row">
                {lawnServices.map((item, index) => (
                    <div key={index} className="lawn_service">
                        <div className="lawn_service_header">
                            {item.title}
                        </div>
                        <div className="lawn_service_pricing">
                            <div>{item.pricing.pricing1}</div>
                            <h2>{item.pricing.pricing2}</h2>
                            <h5>{item.pricing.pricing3}</h5>
                        </div>
                        <div className="lawn_service_content">
                            <ul>
                                {item.content.map((contentItem, contentIndex) =>
                                    <li key={contentIndex}>{contentItem}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <div className="lawn_service_disclaimer">
                Prices above based on average sized subdivision yard
            </div>
        </div>
    </section>
);

export default LawnServicesSection;
