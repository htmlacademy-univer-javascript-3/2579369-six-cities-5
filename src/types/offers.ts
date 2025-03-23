import {OfferPreview } from './offers-preview';


export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
export type Offer = OfferPreview & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

export type Offers = Offer[];

