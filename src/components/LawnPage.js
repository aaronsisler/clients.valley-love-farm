import React from 'react';
import LawnServicesSection from './LawnServicesSection'
import ExtraServicesSection from './ExtraServicesSection'
import { lawnGallery } from '../content/lawn';

const LawnPage = () => (
    <section id="lawn">
        <div className="container">
            <LawnServicesSection />
            <div className="lawn_gallery">
                <ul className="lawn_gallery_row">
                    {lawnGallery.map((item, index) => (
                        <li className="lawn_gallery_item" key={index}>
                            <img className="lawn_gallery_image" src={item.imagePath} alt={item.alt} />
                        </li>
                    ))}
                </ul>
            </div>
            <ExtraServicesSection />
        </div>
    </section>
);

export default LawnPage;
