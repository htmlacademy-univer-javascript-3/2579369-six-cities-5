import { OfferPreview } from '../types/offers-preview';
import { CityName } from '../const/const';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const offersPreview: OfferPreview[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 2,
    previewImage: '../markup/img/apartment-01.jpg',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating'
    ],
    host:{
      name:'Oliver Conner',
      avatarUrl:`${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false,
    },
    images: [
      '../markup/img/apartment-01.jpg'
    ],
    maxAdults: 4,
  },
  {
    id: '9af6f221-h28f-3521-82cd-e0b882a27f00',
    title: 'Beautiful & luxurious house at quiet area',
    type: 'Detached house',
    price: 200,
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 5
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 5
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: '../markup/img/apartment-03.jpg',
    description: 'A big house near Elbphilharmonie.',
    bedrooms: 5,
    goods: [
      'Heating',
      'Veranda'
    ],
    host:{
      name:'Filip Snow',
      avatarUrl:`${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false,
    },
    images: [
      '../markup/img/apartment-02.jpg'
    ],
    maxAdults: 6,
  },
  {
    id: '4gf2f449-h99k-1121-82lm-e0b882a55f00',
    title: 'Luxurious flat in the city center',
    type: 'Flat',
    price: 100,
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 4
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 4
    },
    isFavorite: false,
    isPremium: false,
    rating: 3,
    previewImage: '../markup/img/apartment-02.jpg',
    description: 'Beautiful small flat in the heart of the city.',
    bedrooms: 2,
    goods: [
      'Heating',
      'Breakfast'
    ],
    host:{
      name:'Lolita Milyavskaya',
      avatarUrl:`${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true,
    },
    images: [
      '../markup/img/apartment-small-03.jpg',
      '../markup/img/apartment-small-03.jpg'
    ],
    maxAdults: 3,
  },
  {
    id: '7ff2d234-s99s-2222-97lg-e0b882a55f00',
    title: 'Modern and comfortable mansion',
    type: 'Mansion',
    price: 400,
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 5,
    previewImage: '../markup/img/apartment-03.jpg',
    description: 'Modern mansion in a quiet area.',
    bedrooms: 6,
    goods: [
      'Heating',
      'Breakfast'
    ],
    host:{
      name:'Alex Partini',
      avatarUrl:`${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true,
    },
    images: [
      '../markup/img/apartment-small-04.jpg',
      '../markup/img/apartment-small-04.jpg'
    ],
    maxAdults: 10,
  },
];
