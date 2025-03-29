import leaflet from 'leaflet';
import { useRef, useEffect } from 'react';
import { OfferPreview } from '../../types/offers-preview';
import useMap from './use-map';
import {DefaultCustomIcon, CurrentCustomIcon} from './icons';
import 'leaflet/dist/leaflet.css';

type MapProp = {
  city:OfferPreview['city'];
  offers:OfferPreview[];
  activeCardId:OfferPreview['id'] | null;
}

const Map = ({city,offers,activeCardId}: MapProp) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap({mapRef, city});

  useEffect(() => {

    if(map) {

      map.eachLayer((layer) => {
        if(layer instanceof leaflet.Marker) {
          map.removeLayer(layer);
        }
      });

      offers.forEach((offer) => {
        const isActive = offer.id === activeCardId;
        leaflet
          .marker({
            lat:offer.location.latitude,
            lng:offer.location.longitude,
          }, {
            icon: isActive ? CurrentCustomIcon : DefaultCustomIcon,
          })
          .addTo(map);
      });
    }
  },[map,offers, activeCardId]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
};

export default Map;
