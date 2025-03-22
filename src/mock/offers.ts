import { Offer } from '../types/offers';

export const offer: Offer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longtitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longtitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 3,
    previewImage: 'https://url-to-image/image.png',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating'
    ],
    host:{
      name:'Oliver Conner',
      avatarUrl:'https://url-to-image/image.png',
      isPro: false,
    },
    images: [
      'https://url-to-image/image.png'
    ],
    maxAdults: 4,
  },
  {
    id: '9af6f221-h28f-3521-82cd-e0b882a27f00',
    title: 'Beautiful & luxurious house at quiet area',
    type: 'Detached house',
    price: 200,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 32.35511118467378,
        longtitude: 15.67387123499948,
        zoom: 5
      }
    },
    location: {
      latitude: 32.35511118467378,
      longtitude: 15.67387123499948,
      zoom: 5
    },
    isFavorite: false,
    isPremium: false,
    rating: 5,
    previewImage: 'https://url-to-image/image.png',
    description: 'A big house near Elbphilharmonie.',
    bedrooms: 5,
    goods: [
      'Heating',
      'Veranda'
    ],
    host:{
      name:'Filip Snow',
      avatarUrl:'https://url-to-image/image.png',
      isPro: false,
    },
    images: [
      'https://url-to-image/image.png'
    ],
    maxAdults: 6,
  },
  {
    id: '4gf2f449-h99k-1121-82lm-e0b882a55f00',
    title: 'Luxurious flat in the city center',
    type: 'Flat',
    price: 100,
    city: {
      name: 'Brussels',
      location: {
        latitude: 12.35511118467378,
        longtitude: 65.67387123499948,
        zoom: 4
      }
    },
    location: {
      latitude: 12.35511118467378,
      longtitude: 65.67387123499948,
      zoom: 4
    },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    previewImage: 'https://url-to-image/image.png',
    description: 'Beautiful small flat in the heart of the city.',
    bedrooms: 2,
    goods: [
      'Heating',
      'Breakfast'
    ],
    host:{
      name:'Lolita Milyavskaya',
      avatarUrl:'https://url-to-image/image.png',
      isPro: true,
    },
    images: [
      'https://url-to-image/image.png',
      'https://url-to-image/image.png'
    ],
    maxAdults: 3,
  },
  {
    id: '7ff2d234-s99s-2222-97lg-e0b882a55f00',
    title: 'Luxurious flat in the city center',
    type: 'Mansion',
    price: 400,
    city: {
      name: 'Paris',
      location: {
        latitude: 22.35523518411178,
        longtitude: 45.67387123499948,
        zoom: 8
      }
    },
    location: {
      latitude: 22.35523518411178,
      longtitude: 45.67387123499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: 'https://url-to-image/image.png',
    description: 'Modern mansion in a quiet area.',
    bedrooms: 6,
    goods: [
      'Heating',
      'Breakfast'
    ],
    host:{
      name:'Alex Partini',
      avatarUrl:'https://url-to-image/image.png',
      isPro: true,
    },
    images: [
      'https://url-to-image/image.png',
      'https://url-to-image/image.png'
    ],
    maxAdults: 10,
  },
];
