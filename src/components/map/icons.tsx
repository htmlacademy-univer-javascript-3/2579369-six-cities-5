import leaflet from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const/const-map';
const DefaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

const CurrentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [20, 40],
});

export {DefaultCustomIcon, CurrentCustomIcon};
