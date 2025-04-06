import { useEffect, useState, useRef } from 'react';
import leaflet from 'leaflet';
import { OfferPreview } from '../../types/offers-preview';

type UseMapProps = {
  mapRef:React.RefObject<HTMLDivElement>;
  city:OfferPreview['city'];
}

function useMap({mapRef, city}:UseMapProps) {
  const[map,setMap] = useState<leaflet.Map | null>(null);
  const isRenderRef = useRef(false);

  useEffect(() => {
    if(mapRef.current !== null && !isRenderRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      leaflet.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      )
        .addTo(instance);

      setMap(instance);
      isRenderRef.current = true;
    }

    if(map) {
      map.setView(
        {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        city.location.zoom);
    }


  }, [mapRef, city,map]);

  return map;
}
export default useMap;
