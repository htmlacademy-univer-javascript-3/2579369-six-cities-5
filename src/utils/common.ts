import { AppRoute } from '../const/const';

function addPluralEnding (count:number) {
  return count !== 1 ? 's' : '';
}

const getOfferPath = (offerId: string) =>
  `${AppRoute.Offer}/${offerId}`;

export const formatDate = (inputDate: string): string => {
  const date = new Date(inputDate);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
  return date.toLocaleDateString('en-US', options);
};

export {addPluralEnding, getOfferPath};
