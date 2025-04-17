import { createReducer } from '@reduxjs/toolkit';
import { OfferPreview } from '../../types/offers-preview';
import { Offer } from '../../types/offer';
import { Review } from '../../types/reviews';
import { CityName, AuthorizationStatus } from '../../const/const';
import { Sort } from '../../types/sort';
import { UserData } from '../../types/user-data';
import { changeCity, fillingOffers, changeSort, loadOffers, requireAuthorization, setOffersDataLoadingStatus, setUser, loadOfferById, loadReviews} from './action';

const initialState:{
  city:CityName;
  offers:OfferPreview[];
  sort:Sort;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  user: UserData | null;
  currentOffer: Offer | null;
  currentReviews: Review[] | null;
} = {
  city: CityName.Paris,
  offers: [],
  sort: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  user: null,
  currentOffer: null,
  currentReviews: null,
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
    });

});

export default reducer;
