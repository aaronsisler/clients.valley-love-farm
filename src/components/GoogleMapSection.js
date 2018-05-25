import React from 'react';
import GoogleMapReact from 'google-map-react';
import { googleAPIKey, lattitude, longitude } from '../config';

const MapMarkerIcon = () => (<img src="images/googleMarker.png" />);

const GoogleMapSection = () => (
    <section id="google_map" className="google_map">
        <GoogleMapReact
            bootstrapURLKeys={{ key: googleAPIKey }}
            defaultCenter={{lat: lattitude, lng: longitude}}
            defaultZoom={11}

        >
            <MapMarkerIcon
                lat={lattitude}
                lng={longitude}
            />
        </GoogleMapReact>
    </section>
);

export default GoogleMapSection;
