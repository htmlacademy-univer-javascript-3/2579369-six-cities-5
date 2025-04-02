import { createAction } from '@reduxjs/toolkit';
import { City } from '../../types/offers-preview';


export const changeCity = createAction<City>('changeCity');
export const fillingOffers = createAction('fillingOffers');
