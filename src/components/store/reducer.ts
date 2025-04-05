import { createReducer } from '@reduxjs/toolkit';
import { OfferPreview } from '../../types/offers-preview';
import { CityName } from '../../const/const';
import { changeCity, fillingOffers } from './action';

const initialState:{
  city:CityName;
  offers:OfferPreview[];
} = {
  city: CityName.Paris,
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state,action) => {
      state.city = action.payload;
    })
    .addCase(fillingOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export default reducer;
