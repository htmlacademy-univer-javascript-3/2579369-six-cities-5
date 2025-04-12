import { createReducer } from '@reduxjs/toolkit';
import { OfferPreview } from '../../types/offers-preview';
import { CityName, AuthorizationStatus } from '../../const/const';
import { Sort } from '../../types/sort';
import { changeCity, fillingOffers, changeSort, loadOffers, requireAuthorization, setOffersDataLoadingStatus} from './action';

const initialState:{
  city:CityName;
  offers:OfferPreview[];
  sort:Sort;
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
} = {
  city: CityName.Paris,
  offers: [],
  sort: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
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
    });

});

export default reducer;
