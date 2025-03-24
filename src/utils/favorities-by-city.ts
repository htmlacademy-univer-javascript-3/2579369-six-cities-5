import { OfferPreview } from '../types/offers-preview';

const getFavoritiesByCity = (favorites: OfferPreview[]) =>
  favorites.reduce<{ [key: string]: OfferPreview[]}>((acc,curr) => {
    const city = curr.city.name;

    if(!(city in acc)) {
      acc[city] = [];
    }
    acc[city].push(curr);

    return acc;
  }, {});

export default getFavoritiesByCity;
