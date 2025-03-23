export type Location = {
  latitude: number;
  longtitude:number;
  zoom:number;
}

export type City = {
  name:string;
  location:Location;
}

export type OfferPreview = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium : boolean;
  rating: number;
  previewImage: string;
}

export type OffersPreview = OfferPreview[];
