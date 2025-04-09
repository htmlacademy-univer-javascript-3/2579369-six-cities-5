import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../../const/const';
import { OfferPreview } from '../../types/offers-preview';
import { Sort } from '../../types/sort';


export const changeCity = createAction<CityName>('changeCity');
export const fillingOffers = createAction<OfferPreview[]>('fillingOffers');
export const changeSort = createAction<Sort>('changeSort');

export const loadOffers = createAction<OfferPreview[]>('loadOffers');
