import React from 'react';
import leaflet from 'leaflet';
import { useRef, useState, useEffect } from 'react';
import { OfferPreview } from '../../types/offers-preview';
import useMap from './use-map';
import {DefaultCustomIcon, CurrentCustomIcon} from './icons';
import 'leaflet/dist/leaflet.css';

type MapProp = {
  city:OfferPreview['city'];
  points:OfferPreview[];
}

const Map = ({city,points}: MapProp) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap({mapRef, city});

  useEffect(() => {
    if(map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat:point.location.latitude,
            lng:point.location.longitude,
          }, {
            icon: DefaultCustomIcon,
          })
          .addTo(map);
      });
    }
  },[map,points]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
};

export default Map;
