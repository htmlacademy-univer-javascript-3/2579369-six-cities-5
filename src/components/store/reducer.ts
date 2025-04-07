import { createReducer } from '@reduxjs/toolkit';
import { OfferPreview } from '../../types/offers-preview';
import { CityName } from '../../const/const';
import { Sort } from '../../types/sort';
import { changeCity, fillingOffers, changeSort } from './action';

const initialState:{
  city:CityName;
  offers:OfferPreview[];
  sort:Sort;
} = {
  city: CityName.Paris,
  offers: [],
  sort: 'Popular',
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
    });

});

export default reducer;
