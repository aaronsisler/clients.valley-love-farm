import React from 'react';
import gallery from '../content/gallery';

const GallerySection = () => (
    <section id="gallery">
        <div className="container">
            <ul className="gallery_row">
                {gallery.map((item, index) => (
                    <li className="gallery_item" key={index}>
                        <img className="gallery_image" src={item.imagePath} alt={item.alt} />
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default GallerySection;
