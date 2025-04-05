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

  const markersLayer = useRef<leaflet.LayerGroup | null>(null);

  useEffect(() => {

    if(map && !markersLayer.current){
      markersLayer.current = leaflet.layerGroup().addTo(map);
    }

    if(map && markersLayer.current) {

      offers.forEach((offer) => {
        const isActive = offer.id === activeCardId;
        leaflet
          .marker({
            lat:offer.location.latitude,
            lng:offer.location.longitude,
          }, {
            icon: isActive ? CurrentCustomIcon : DefaultCustomIcon,
          })
          .addTo(markersLayer.current!);
      });

      return () => {
        if(map && markersLayer.current) {
          markersLayer.current.clearLayers();
          map.removeLayer(markersLayer.current);
          markersLayer.current = null;
        }
      };
    }
  },[map,offers, activeCardId,city]);

  return (
    <div
      style={{height: '100%', width: '100%'}}
      ref={mapRef}
    >
    </div>
  );
};

export default Map;
