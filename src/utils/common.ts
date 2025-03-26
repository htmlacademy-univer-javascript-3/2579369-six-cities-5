import { AppRoute } from '../const/const';

function addPluralEnding (count:number) {
  return count !== 1 ? 's' : '';
}

const getOfferPath = (offerId: string) =>
  `${AppRoute.Offer}/${offerId}`;

export {addPluralEnding, getOfferPath};
