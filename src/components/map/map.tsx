import leaflet from 'leaflet';
import { useRef, useEffect } from 'react';
import { OfferPreview } from '../../types/offers-preview';
import useMap from './use-map';
import {DefaultCustomIcon, CurrentCustomIcon} from './icons';
import 'leaflet/dist/leaflet.css';

type MapProp = {
  city:OfferPreview['city'];
  points:OfferPreview[];
  activeCardId:OfferPreview['id'] | null;
}

const Map = ({city,points,activeCardId}: MapProp) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap({mapRef, city});

  useEffect(() => {

    if(map) {

      map.eachLayer((layer) => {
        if(layer instanceof leaflet.Marker) {
          map.removeLayer(layer);
        }
      });

      points.forEach((point) => {
        const isActive = point.id === activeCardId;
        leaflet
          .marker({
            lat:point.location.latitude,
            lng:point.location.longitude,
          }, {
            icon: isActive ? CurrentCustomIcon : DefaultCustomIcon,
          })
          .addTo(map);
      });
    }
  },[map,points, activeCardId]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
};

export default Map;
