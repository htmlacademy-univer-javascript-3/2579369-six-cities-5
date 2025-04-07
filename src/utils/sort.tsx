import { Sort } from '../types/sort';
import { OfferPreview} from '../types/offers-preview';

function sortByRating (a:OfferPreview, b:OfferPreview) {
  return b.rating - a.rating;
}

function sortLowToHIgh (a:OfferPreview, b:OfferPreview) {
  return a.price - b.price;
}

function sortHIghToLow (a:OfferPreview, b:OfferPreview) {
  return b.price - a.price;
}

const sort: Record<Sort,(offers: OfferPreview[]) => OfferPreview[]> = {
  Popular:(offers: OfferPreview[]) => offers,
  HighToLow:(offers: OfferPreview[]) => offers.sort(sortHIghToLow),
  LowToHigh:(offers: OfferPreview[]) => offers.sort(sortLowToHIgh),
  TopRated:(offers: OfferPreview[]) => offers.sort(sortByRating),
};

export default sort;
