import { City } from '../types/offers-preview';
import { CityName } from '../const/const';

export const Cities:City[] = [
  {
    name:CityName.Paris,
    location:{
      latitude:48.8566,
      longitude: 2.3522,
      zoom: 10,
    },
  },
  {
    name:CityName.Cologne,
    location:{
      latitude:50.935173,
      longitude:6.953101,
      zoom: 10,
    },
  },
  {
    name:CityName.Brussels,
    location:{
      latitude:50.8504 ,
      longitude: 4.34878,
      zoom: 10,
    },
  },
  {
    name:CityName.Amsterdam,
    location:{
      latitude:52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 10,
    },
  },
  {
    name:CityName.Hamburg,
    location:{
      latitude:53.57532,
      longitude: 10.01534,
      zoom: 10,
    },
  },
  {
    name:CityName.Dusseldorf,
    location:{
      latitude:51.2217,
      longitude: 6.77616,
      zoom: 10,
    },
  },
];
