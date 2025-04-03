import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../../const/const';


export const changeCity = createAction<CityName>('changeCity');
export const fillingOffers = createAction('fillingOffers');
