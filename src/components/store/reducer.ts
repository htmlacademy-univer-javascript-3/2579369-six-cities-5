import { createReducer } from '@reduxjs/toolkit';
import { OfferPreview } from '../../types/offers-preview';
import { Offer } from '../../types/offer';
import { Review } from '../../types/reviews';
import { CityName, AuthorizationStatus } from '../../const/const';
import { Sort } from '../../types/sort';
import { UserData } from '../../types/user-data';
import { changeCity, fillingOffers, changeSort,addFavoriteOffer,addReview, loadOffers,loadNearOffers, requireAuthorization, setOffersDataLoadingStatus, setUser, loadOfferById, loadReviews, loadFavorites} from './action';

const initialState:{
  city:CityName;
  offers:OfferPreview[];
  sort:Sort;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  user: UserData | null;
  currentOffer: Offer | null;
  currentReviews: Review[];
  nearOffers: OfferPreview[];
  favorites: OfferPreview[];
} = {
  city: CityName.Paris,
  offers: [],
  sort: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  user: null,
  currentOffer: null,
  currentReviews: [],
  nearOffers:[],
  favorites: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state,action) => {
      state.city = action.payload;
    })
    .addCase(fillingOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSort, (state,action) =>{
      state.sort = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization,(state, action) =>{
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(loadOfferById, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.currentReviews = action.payload;
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(loadFavorites,(state, action) => {
      state.favorites = action.payload;
    })
    .addCase(addFavoriteOffer, (state, action) => {
      const updatedOffer = action.payload;
      const nearOfferIndex = state.nearOffers.findIndex((offer) => offer.id === updatedOffer.id);
      const offerIndex = state.offers.findIndex((offer) => offer.id === updatedOffer.id);
      if (offerIndex !== -1) {
        state.offers[offerIndex] = updatedOffer;
      }
      if (nearOfferIndex !== -1) {
        state.nearOffers[nearOfferIndex] = updatedOffer;
      }
      if (state.currentOffer?.id === updatedOffer.id) {
        state.currentOffer = updatedOffer;
      }
      if (updatedOffer.isFavorite) {
        state.favorites.push(updatedOffer);
      } else {
        state.favorites = state.favorites.filter((favorite) => favorite.id !== updatedOffer.id);
      }
    })
    .addCase(addReview, (state, action) => {
      const newReview = action.payload;
      state.currentReviews.push(newReview);
    });

});

export default reducer;
