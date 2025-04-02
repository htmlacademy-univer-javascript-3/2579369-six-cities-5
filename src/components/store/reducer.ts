import { createReducer } from '@reduxjs/toolkit';
import { offersPreview } from '../../mock/offers-preview';
import { CityName } from '../../const/const';
import { changeCity, fillingOffers } from './action';

const initialState = {
  city: CityName.Paris,
  offers: offersPreview,

};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state,action) => {
      state.city = action.payload;
    })
    .addCase(fillingOffers, (state) => {
      state.offers = offersPreview;
    });
});

export default reducer;
