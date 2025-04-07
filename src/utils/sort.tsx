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
  Popular:(offers: OfferPreview[]) => offers.slice(),
  HighToLow:(offers: OfferPreview[]) => offers.slice().sort(sortHIghToLow),
  LowToHigh:(offers: OfferPreview[]) => offers.slice().sort(sortLowToHIgh),
  TopRated:(offers: OfferPreview[]) => offers.slice().sort(sortByRating),
};

export default sort;
