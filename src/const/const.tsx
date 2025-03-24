/* eslint-disable react-refresh/only-export-components */
const Setting = {
  CardsCount: 5
};

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CityName {
  Paris ='Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

const ratingMap = {
  '5' : 'perfect',
  '4' : 'good',
  '3' : 'not bad',
  '2' : 'badly',
  '1' : 'terribly',
};

export {Setting, ratingMap};
